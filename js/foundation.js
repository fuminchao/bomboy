
var Animation=function(config)
{
    this.delay = config.delay;
    this.listeners = config.listeners;
    this.started=false;
    this.timer=null;
}
Animation.prototype.start=function()
{
    this.started=true;
    var instance=this;
    this.timer=window.setInterval(
        instance.listeners.Run,
        this.delay
    );
};
Animation.prototype.stop=function()
{
    this.started=false;
    if(this.timer!=null) window.clearInterval(this.timer);
};


var KeyListener=function(config){
    this.keyMap=new Array(128);
    this.stack=[];

    this.callback=function(){
        if(config.listener!=null){config.listener(this.current());}
    }.delegate(this);

    window.addEventListener('keydown',function(ev){
        this.keyMap[ev.keyCode]=true;
        if(this.current()!=ev.keyCode){
            this.stack.push(ev.keyCode);
            this.callback();
        }
    }.delegate(this),true);

    window.addEventListener('keyup',function(ev){
        this.keyMap[ev.keyCode]=false;
        if(this.stack[this.stack.length-1]==ev.keyCode) this.stack.pop();
        this.callback();
    }.delegate(this),true);
};
KeyListener.prototype.clear=function(){
    this.stack.length=0;
    this.callback();
};
KeyListener.prototype.current=function(){
    while(this.stack.length>0){
        if(this.keyMap[this.stack[this.stack.length-1]]==true) return this.stack[this.stack.length-1];
        else this.stack.pop();
    }
    return -1;
};
KeyListener.prototype.trigger=function(){
    this.callback();
};

var Animator=function(){};
Animator.prototype.initAnimator=function(frameInterval,frameLength,loop){
    this.aniConfig={};
    this.aniConfig.frameInterval=frameInterval;
    this.aniConfig.frameLength=frameLength;
    this.aniConfig.intervalCount=0;
    this.aniConfig.frameCount=0;
    this.aniConfig.loop=(loop==null?true:loop);
    this.aniConfig.end=false;
};
Animator.prototype.go=function(){
    if(this.aniConfig.end==false){
        if( ++this.aniConfig.intervalCount == this.aniConfig.frameInterval ){
            this.aniConfig.intervalCount=0;

            if( ++this.aniConfig.frameCount == this.aniConfig.frameLength ){
                if(this.aniConfig.loop==true) this.aniConfig.frameCount=0;
                else this.aniConfig.end=true;
            }
        }
    }
};
Animator.prototype.currentFrame=function(){ return this.aniConfig.frameCount; };


Array.prototype.each=function(f){
    var l=this.length;
    for(var i=0;i<l;i++){
        if(f(i,this[i])==false){
            break;
        }
    }
};
Array.prototype.eachBackward=function(f){
    for(var i=this.length-1;i>-1;i--){
        if(f(i,this[i])==false){
            break;
        }
    }
};

Function.prototype.delegate=function(scope){
    var f=this;
    return function(){
        f.apply(scope,arguments);
    };
};

Function.prototype.extend=function(parent){
    for(var x in parent.prototype){
        this.prototype[x]=parent.prototype[x];
    }
    return this;
};

var LinkedList=function(){
    this.Head=null;
    this.Tail=null;
};
LinkedList.prototype.isEmpty=function(){
    return this.Head==null&&this.Tail==null;
};
LinkedList.prototype.add=function(obj){
    obj.prev=obj.next=null;

    if(this.Tail==null&&this.Head==null){
        this.Head=this.Tail=obj;
    } else {
        this.Tail.next=obj;
        obj.prev=this.Tail;
        this.Tail=obj;
    }
    return obj;
};
LinkedList.prototype.remove=function(obj){
    if(obj.next!=null){
        obj.next.prev=obj.prev;
    } else {
        this.Tail=obj.prev;
    }

    if(obj.prev!=null){
        obj.prev.next=obj.next;
    } else {
        this.Head=obj.next;
    }

    return obj;
};
LinkedList.prototype.each=function(f){
    var c=this.Head;
    var i=0;
    while(c!=null){
        f(i,c);
        c=c.next;
        i++;
    }
};

