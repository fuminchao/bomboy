
var Imgz={};
Imgz.IMAGE_WIDTH=16;
Imgz.addResource=function(key,imageUrl){
    var i=new Image(Imgz.IMAGE_WIDTH,Imgz.IMAGE_WIDTH);
    i.src=imageUrl;
    this[key]=i;
};

Imgz.addResource('PowerUp','img/bonus_pow.png');
Imgz.addResource('SpeedUp','img/bonus_spd.png');
Imgz.addResource('PocketUp','img/bonus_num.png');
Imgz.addResource('Ghost','img/bonus_ghost.png');

Imgz.addResource('wall','img/wall.png');
Imgz.addResource('wall_0','img/wall_0.png');
Imgz.addResource('wall_1','img/wall_1.png');
Imgz.addResource('wall_2','img/wall_2.png');
Imgz.addResource('wall_3','img/wall_3.png');
Imgz.addResource('wall_4','img/wall_4.png');
Imgz.addResource('wall_5','img/wall_5.png');

Imgz.addResource('bomb_0','img/bomb_0.png');
Imgz.addResource('bomb_1','img/bomb_1.png');
Imgz.addResource('bomb_2','img/bomb_2.png');
Imgz.addResource('bomb_3','img/bomb_1.png');


Imgz.addResource('NULL','img/null.png');
Imgz.addResource('stun','img/stun.png');
Imgz.addResource('boy_0_0','img/boy_0_0.png');
Imgz.addResource('boy_0_1','img/boy_0_1.png');
Imgz.addResource('boy_0_2','img/boy_0_0.png');
Imgz.addResource('boy_0_3','img/boy_0_2.png');

Imgz.addResource('boy_1_0','img/boy_1_0.png');
Imgz.addResource('boy_1_1','img/boy_1_1.png');
Imgz.addResource('boy_1_2','img/boy_1_2.png');
Imgz.addResource('boy_1_3','img/boy_1_1.png');

Imgz.addResource('boy_2_0','img/boy_2_0.png');
Imgz.addResource('boy_2_1','img/boy_2_1.png');
Imgz.addResource('boy_2_2','img/boy_2_0.png');
Imgz.addResource('boy_2_3','img/boy_2_2.png');

Imgz.addResource('boy_3_0','img/boy_3_0.png');
Imgz.addResource('boy_3_1','img/boy_3_1.png');
Imgz.addResource('boy_3_2','img/boy_3_2.png');
Imgz.addResource('boy_3_3','img/boy_3_1.png');

var fileSubscript=[0,1,2,3,2,1,0];
for(var d=0;d<5;d++){
    for(var i=0;i<fileSubscript.length;i++){
        Imgz.addResource('flame_'+d+'_'+i,'img/flame_'+d+'_'+fileSubscript[i]+'.png');
    }
}
for(var i=0;i<fileSubscript.length;i++){
    Imgz.addResource('flame_1_'+i+'m','img/flame_h_'+fileSubscript[i]+'m.png');
    Imgz['flame_3_'+i+'m']=Imgz['flame_1_'+i+'m'];
}
for(var i=0;i<fileSubscript.length;i++){
    Imgz.addResource('flame_0_'+i+'m','img/flame_v_'+fileSubscript[i]+'m.png');
    Imgz['flame_2_'+i+'m']=Imgz['flame_0_'+i+'m'];
}

Imgz.addResource('creature_1_0','img/creature_1_0.png');
Imgz.addResource('creature_1_1','img/creature_1_1.png');
Imgz.addResource('creature_1_2','img/creature_1_2.png');
Imgz['creature_1_3']=Imgz['creature_1_1'];
Imgz.addResource('creature_1_d','img/creature_1_d.png');

Imgz.addResource('creature_5_0','img/creature_5_0.png');
Imgz.addResource('creature_5_1','img/creature_5_1.png');
Imgz.addResource('creature_5_2','img/creature_5_2.png');
Imgz['creature_5_3']=Imgz['creature_5_1'];
Imgz.addResource('creature_5_d','img/creature_5_d.png');

Imgz.addResource('creature_dead_1','img/creature_dead_1.png');
Imgz.addResource('creature_dead_2','img/creature_dead_2.png');
Imgz.addResource('creature_dead_3','img/creature_dead_3.png');
Imgz.addResource('creature_dead_4','img/creature_dead_4.png');
