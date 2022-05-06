import oneDot from './dots/one-dots.png'

const tiles = {
    oneDots:'./dots/one-dots.png',
    twoDots:''
}

function Tile() {
    return (
        <div>
            <img alt="tile" src={oneDot} />
            <div>{tiles.oneDots}</div>
        </div>
    )
}

export default Tile;
