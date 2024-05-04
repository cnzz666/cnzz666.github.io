import{BlockRegistry}from "../../block/BlockRegistry.js";import Generator from "../Generator.js";export default class TreeGenerator extends Generator{constructor(world,seed){super(world,seed);this.size=8;}
generateAtBlock(x,y,z){let height=this.random.nextInt(3)+4;if(y<1||y+height+1>128){return false;}
for(let totalY=y;totalY<=y+1+height;totalY++){let radius=1;if(totalY===y){radius=0;}
if(totalY>=(y+1+height)-2){radius=2;}
for(let totalX=x-radius;totalX<=x+radius;totalX++){for(let totalZ=z-radius;totalZ<=z+radius;totalZ++){if(totalY>=0&&totalY<128){let typeId=this.world.getBlockAt(totalX,totalY,totalZ);if(typeId!==0&&typeId!==BlockRegistry.LEAVE.getId()){return;}}else{return;}}}}
let typeIdBelowTree=this.world.getBlockAt(x,y-1,z);if(typeIdBelowTree!==BlockRegistry.GRASS.getId()&&typeIdBelowTree!==BlockRegistry.DIRT.getId()||y>=128-height-1){return false;}
this.world.setBlockAt(x,y-1,z,BlockRegistry.DIRT.getId());for(let totalY=(y-3)+height;totalY<=y+height;totalY++){let offsetY=totalY-(y+height);let radius=Math.floor(1-offsetY/2);for(let totalX=x-radius;totalX<=x+radius;totalX++){let offsetX=totalX-x;for(let totalZ=z-radius;totalZ<=z+radius;totalZ++){let offsetZ=totalZ-z;if(Math.abs(offsetX)!==radius||Math.abs(offsetZ)!==radius||this.random.nextInt(2)!==0&&offsetY!==0){this.world.setBlockAt(totalX,totalY,totalZ,BlockRegistry.LEAVE.getId());}}}}
for(let i=0;i<height;i++){let typeId=this.world.getBlockAt(x,y+i,z);if(typeId===0||typeId===BlockRegistry.LEAVE.getId()){this.world.setBlockAt(x,y+i,z,BlockRegistry.LOG.getId());}}
return true;}}