import Packet from "../../../Packet.js";export default class HandshakePacket extends Packet{constructor(version,nextState){super();this.version=version;this.nextState=nextState;}
write(buffer){buffer.writeVarInt(this.version);buffer.writeString("localhost");buffer.writeShort(25565);buffer.writeVarInt(this.nextState.getId());}
read(buffer){}}