import Block from "../Block.js";export default class BlockLeave extends Block{constructor(id,textureSlotId){super(id,textureSlotId);this.sound=Block.sounds.grass;}
getColor(world,x,y,z,face){if(world===null){return 0<<16|255<<8|0;}
let temperature=world.getTemperature(x,y,z);let humidity=world.getHumidity(x,y,z);return world.minecraft.grassColorizer.getColor(temperature,humidity);}
getOpacity(){return 0.3;}}