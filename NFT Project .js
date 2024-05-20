// Create a variable to hold your NFTs
let nfts = [];

// Define the mintNFT function to create an NFT object and store it in the nfts array
function mintNFT(title, artist, genre, album) {
  let nft = {
    title: title,
    artist: artist,
    genre: genre,
    album: album
  };
  nfts.push(nft);
}
 
// Create a function to list all NFTs and print their metadata to the console
function listNFTs() {
  nfts.forEach((nft, index) => {
    console.log(`NFT ${index + 1}`);
    console.log(`Title: ${nft.title}`);
    console.log(`Artist: ${nft.artist}`);
    console.log(`Genre: ${nft.genre}`);
    console.log(`Album: ${nft.album}`);
    console.log('--------------------------');
  });
}

// Create a function to return the total number of NFTs
function getTotalSupply() {
  return nfts.length;
}

// Call your functions 
mintNFT("Stargazing", "Travis Scott", "HipHop", "Astroworld");
mintNFT("Castle of Class", "Linkin Park", "Rock", "Living Things");
mintNFT("Get into it", "Doja Cat", "HipHop", "Planet Her");

console.log("List of all NFTs:");
listNFTs();

console.log("Total supply of NFTs: " + getTotalSupply());
