const objs = [
    {
        "Token": "Celo",
        "Amount": 100,
        "Type": "sent",
        "Timestamp": 1643723400,
        "BlockNumber": 123456,
        "BlockHash": "0x1234567890abcdef",
        "From": "0x1234567890abcdef",
        "To": "0x9876543210fedcba"
    },
    {
        "Token": "cusd",
        "Amount": 150,
        "Type": "received",
        "Timestamp": 1643723460,
        "BlockNumber": 123457,
        "BlockHash": "0x1234567890abcdee",
        "From": "0x1234567890abcdee",
        "To": "0x9876543210fedcb9"
    },
    {
        "Token": "Celo",
        "Amount": 200,
        "Type": "sent",
        "Timestamp": 1643723520,
        "BlockNumber": 123458,
        "BlockHash": "0x1234567890abcdf0",
        "From": "0x1234567890abcdf0",
        "To": "0x9876543210fedcb8"
    },
    {
        "Token": "Celo",
        "Amount": 120,
        "Type": "received",
        "Timestamp": 1643723580,
        "BlockNumber": 123459,
        "BlockHash": "0x1234567890abcdf1",
        "From": "0x1234567890abcdf1",
        "To": "0x9876543210fedcb7"
    },
    {
        "Token": "Celo",
        "Amount": 180,
        "Type": "sent",
        "Timestamp": 1643723640,
        "BlockNumber": 123460,
        "BlockHash": "0x1234567890abcdf2",
        "From": "0x1234567890abcdf2",
        "To": "0x9876543210fedcb6"
    },
    {
        "Token": "cusd",
        "Amount": 130,
        "Type": "received",
        "Timestamp": 1643723700,
        "BlockNumber": 123461,
        "BlockHash": "0x1234567890abcdf3",
        "From": "0x1234567890abcdf3",
        "To": "0x9876543210fedcb5"
    },
    {
        "Token": "Celo",
        "Amount": 170,
        "Type": "sent",
        "Timestamp": 1643723760,
        "BlockNumber": 123462,
        "BlockHash": "0x1234567890abcdf4",
        "From": "0x1234567890abcdf4",
        "To": "0x9876543210fedcb4"
    },
    {
        "Token": "Celo",
        "Amount": 110,
        "Type": "received",
        "Timestamp": 1643723820,
        "BlockNumber": 123463,
        "BlockHash": "0x1234567890abcdf5",
        "From": "0x1234567890abcdf5",
        "To": "0x9876543210fedcb3"
    },
    {
        "Token": "Celo",
        "Amount": 160,
        "Type": "sent",
        "Timestamp": 1643723880,
        "BlockNumber": 123464,
        "BlockHash": "0x1234567890abcdf6",
        "From": "0x1234567890abcdf6",
        "To": "0x9876543210fedcb2"
    },
    {
        "Token": "cusd",
        "Amount": 140,
        "Type": "received",
        "Timestamp": 1643723940,
        "BlockNumber": 123465,
        "BlockHash": "0x1234567890abcdf7",
        "From": "0x1234567890abcdf7",
        "To": "0x9876543210fedcb1"
    },
    {
        "Token": "Celo",
        "Amount": 150,
        "Type": "sent",
        "Timestamp": 1643724000,
        "BlockNumber": 123466,
        "BlockHash": "0x1234567890abcdf8",
        "From": "0x1234567890abcdf8",
        "To": "0x9876543210fedcb0"
    },
    {
        "Token": "Celo",
        "Amount": 190,
        "Type": "received",
        "Timestamp": 1643724060,
        "BlockNumber": 123467,
        "BlockHash": "0x1234567890abcdf9",
        "From": "0x1234567890abcdf9",
        "To": "0x9876543210fedcaf"
    },
    {
        "Token": "Celo",
        "Amount": 110,
        "Type": "sent",
        "Timestamp": 1643724120,
        "BlockNumber": 123468,
        "BlockHash": "0x1234567890abcdfa",
        "From": "0x1234567890abcdfa",
        "To": "0x9876543210fedcae"
    },
    {
        "Token": "Celo",
        "Amount": 130,
        "Type": "received",
        "Timestamp": 1643724180,
        "BlockNumber": 123469,
        "BlockHash": "0x1234567890abcdfb",
        "From": "0x1234567890abcdfb",
        "To": "0x9876543210fedcad"
    },
    {
        "Token": "Celo",
        "Amount": 140,
        "Type": "sent",
        "Timestamp": 1643724240,
        "BlockNumber": 123470,
        "BlockHash": "0x1234567890abcdfc",
        "From": "0x1234567890abcdfc",
        "To": "0x9876543210fedcac"
    },
    {
        "Token": "Celo",
        "Amount": 160,
        "Type": "received",
        "Timestamp": 1643724300,
        "BlockNumber": 123471,
        "BlockHash": "0x1234567890abcdfd",
        "From": "0x1234567890abcdfd",
        "To": "0x9876543210fedcab"
    },
    {
        "Token": "Celo",
        "Amount": 180,
        "Type": "sent",
        "Timestamp": 1643724360,
        "BlockNumber": 123472,
        "BlockHash": "0x1234567890abcdf0",
        "From": "0x1234567890abcdf0",
        "To": "0x9876543210fedcaa"
    },
    {
        "Token": "Celo",
        "Amount": 170,
        "Type": "received",
        "Timestamp": 1643724420,
        "BlockNumber": 123473,
        "BlockHash": "0x1234567890abcdf1",
        "From": "0x1234567890abcdf1",
        "To": "0x9876543210fedca9"
    },
    {
        "Token": "Celo",
        "Amount": 190,
        "Type": "sent",
        "Timestamp": 1643724480,
        "BlockNumber": 123474,
        "BlockHash": "0x1234567890abcdf2",
        "From": "0x1234567890abcdf2",
        "To": "0x9876543210fedca8"
    },
    {
        "Token": "Celo",
        "Amount": 150,
        "Type": "received",
        "Timestamp": 1643724540,
        "BlockNumber": 123475,
        "BlockHash": "0x1234567890abcdf3",
        "From": "0x1234567890abcdf3",
        "To": "0x9876543210fedca7"
    }
];


const getTotalAmount = ():number=>{
const tt = objs.reduce((accumulator,token)=>accumulator + token.Amount,0)
return tt
}

//get total amount of cusd tokens
const cusdTotalAmount =()=>{
    const cusdTT = objs.reduce((acc,cusdT)=>{
      return (cusdT.Token === "cusd")? acc +cusdT.Amount :acc
               
    },0)
    return cusdTT

}

console.log("Total Amount",getTotalAmount())
console.log("cusd Total Amount",cusdTotalAmount())