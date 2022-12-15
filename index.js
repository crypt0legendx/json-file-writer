var fs = require("fs")
var obj = [
    {
      "id": "001fe73d-e985-4a0f-b32e-9163da2c9258",
      "networkId": 5,
      "contractAddress": "0x50Ff16671A02B5fd25EEcEe323edd956Ac72aAAf",
      "tokenId": 137,
      "tokenUri": "ipfs://Qme57cbJ7FUZqJkXZ7pYu1oPHAQ1txB6VAz2vg4RktLY4k/137.json",
      "nameEN": "Jack",
      "nameJP": "ジャック",
      "tribe": "商人",
      "organization": "大陸探索部隊",
      "job": "下級レンジャー",
      "chapter": 1,
      "rarity": 2,
      "imageProfileUrl": "https://assets.dev.wally-pilot.com/PFP.png",
      "imageBodySmallUrl": "https://assets.dev.wally-pilot.com/nfts/smalls/137.png",
      "imageBodyLargeUrl": "https://assets.dev.wally-pilot.com/nfts/larges/1.png",
      "mapPositionX": -22.9,
      "mapPositionY": 14.12,
      "saleType": "englishAuction",
      "saleInitialPrice": "0.001",
      "saleStartAt": "2023-11-01T12:30:00.000Z",
      "saleEndAt": "2024-11-01T12:30:00.000Z",
      "createdAt": "2022-11-11T10:34:43.973Z",
      "updatedAt": "2022-11-11T10:34:43.973Z"
    },  
  ]

obj = obj.map(d=>({
    "id": d.id,
    "networkId": d.networkId,
    "contractAddress": d.contractAddress,
    "tokenId": d.tokenId,
    "nameEN": d.nameEN,
    "nameJP": d.nameJP,
    "tribe": d.tribe,
    "organization": d.organization,
    "job": d.job,
    "chapter": d.chapter,
    "rarity": d.rarity,
    "imageProfileUrl": d.imageProfileUrl,
    "imageBodySmallUrl": d.imageBodySmallUrl,
    "imageBodyLargeUrl": d.imageBodyLargeUrl,
    "mapPositionX": d.mapPositionX,
    "mapPositionY": d.mapPositionY,
    "saleType": d.saleType,
    "saleInitialPrice": d.saleInitialPrice,
    "saleStartAt": d.saleStartAt,
    "saleEndAt": d.saleEndAt,
    "createdAt": d.createdAt,
    "updatedAt": d.updatedAt,
    "tokenUri":d.tokenUri
}))

var json = JSON.stringify(obj)

fs.writeFile("output.json", json, "utf8", function (res) {
  console.log(res)
})
