import Block from "../world/block/Block.js";import*as THREE from "../../../../../../libraries/three.module.js";export default class SoundManager{constructor(){this.audioLoader=new THREE.AudioLoader();this.audioListener=null;this.soundPool={};}
create(worldRenderer){this.scene=worldRenderer.scene;this.audioListener=new THREE.AudioListener();worldRenderer.camera.add(this.audioListener);for(let i in Block.sounds){let sound=Block.sounds[i];this.loadSoundPool(sound.getStepSound());}}
loadSoundPool(name){let pool=[];let amount=4;let path=name.replace(".","/");for(let i=0;i<amount;i++){let sound=this.loadSound('src/resources/sound/'+path+(i+1)+'.ogg');pool.push(sound);}
this.soundPool[name]=pool;}
loadSound(path){if(!this.isCreated()){return;}
let sound=new THREE.PositionalAudio(this.audioListener);sound.setRefDistance(0.1);sound.setRolloffFactor(6);sound.setFilter(sound.context.createBiquadFilter());sound.setVolume(0);this.audioLoader.load(path,buffer=>{sound.setBuffer(buffer);this.scene.add(sound);});return sound;}
playSound(name,x,y,z,volume,pitch){let pool=this.soundPool[name];if(typeof pool==="undefined"){this.loadSoundPool(name);}else if(pool.length>0){let sound=pool[Math.floor(Math.random()*pool.length)];if(typeof volume==="undefined"||typeof sound==="undefined"){return;}
if(sound.isPlaying){sound.stop();}
sound.position.set(x,y,z);sound.setVolume(volume);sound.filters[0].frequency.setValueAtTime(12000*pitch,sound.context.currentTime);sound.offset=0;sound.play();}}
isCreated(){return!(this.audioListener===null);}}