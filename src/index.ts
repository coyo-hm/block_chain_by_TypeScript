import crypto from "crypto"

interface BlockShape{
    hash: string;
    prevHash: string;
    height: number;
    data: string;
}

class Block implements BlockShape{
    public hash: string;
    constructor(
        public prevHash: string,
        public height: number,
        public data: string
    ){
        this.hash = Block.calculateHash(prevHash, height, data)
        //static 함수: 인스턴스가 아니더라도 호출 가능
    }
    static calculateHash(prevHash: string, height: number, data: string){
        const toHash = `${prevHash}${height}${data}`;
        return crypto.createHash("sha256").update(toHash).digest("hex")
    }
}

class Blockchain {
    private blocks: Block[]
    constructor(){
        this.blocks = [];
    }
    private getPrevHash(){
        if(this.blocks.length === 0) return ""
        return this.blocks[this.blocks.length - 1].hash;
    }
    public addBlock(data: string){
        const newBlock = new Block(this.getPrevHash(), this.blocks.length + 1, data);
        this.blocks.push(newBlock);
    }
    public getBlocks(){
        return [...this.blocks];
        //배열 안에 있는 데이터를 가진 새로운 배열을 리턴
        //다른 누군가가 임의로 해시를 추가해도 블록체인의 state와 연결되지 않는다.
    }
}

const blockchain = new Blockchain();

blockchain.addBlock("First one");
blockchain.addBlock("Second one");
blockchain.addBlock("Third one");

console.log(blockchain.getBlocks());