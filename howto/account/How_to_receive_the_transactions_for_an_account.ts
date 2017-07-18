import {AccountHttp, Address, NEMLibrary, NetworkTypes} from "nem-library";

NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

const accountHttp = new AccountHttp();

accountHttp.allTransactions(new Address("TCFFOM-Q2SBX7-7E2FZC-3VX43Z-TRV4ZN-TXTCGW-BM5J"))
    .subscribe(allTransactions => {
       console.log(allTransactions);
    });