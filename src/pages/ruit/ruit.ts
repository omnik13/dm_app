import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-ruit',
  templateUrl: 'ruit.html'
})
export class RuitPage {

  userInput: string = "";

  entry: string;
  fulReduc: number;
  engOrd: number;
  primes: number;
  numOChar: number;
  //numOChar2: number = 0;
  entryNoSpace: string;

  totFulRed: number;
  totEngOrd: number;
  totPrimes: number;

  //i: number = 0;

  constructor(public navCtrl: NavController) {

    this.entry = "";
    this.engOrd = 0;
    this.fulReduc = 0;
    this.primes = 0;
    this.numOChar = 0;
    this.entryNoSpace = "";
    this.totFulRed = 0;
    this.totEngOrd = 0;
    this.totPrimes = 0;

  }

 //calGema FUNCTION
  calGema(input: string) {

    //var database = firebase.database();

    this.entry = this.userInput;
    //alert(this.userInput);

    //NUMBER OF CHARACTERS
    this.entryNoSpace = this.entry.replace(/ /g, "");
    this.numOChar = this.entryNoSpace.length;

    //
    //
    //CYPHER: ENGLISH ORDINAL
    //FOR LOOP
    for (var i = 0; i <= this.entry.length; i++) {

      //
      switch (this.entry.charAt(i)) {

        //case ' ':
        //this.totEngOrd +=0;
        //break;
        //
        case 'A':
          this.totEngOrd += 1;
          break;
        case 'a':
          this.totEngOrd += 1;
          break;
        //
        case 'B':
          this.totEngOrd += 2;
          break;
        case 'b':
          this.totEngOrd += 2;
          break;
        //
        case 'C':
          this.totEngOrd += 3;
          break;
        case 'c':
          this.totEngOrd += 3;
          break;
        //
        case 'D':
          this.totEngOrd += 4;
          break;
        case 'd':
          this.totEngOrd += 4;
          break;
        //
        case 'E':
          this.totEngOrd += 5;
          break;
        case 'e':
          this.totEngOrd += 5;
          break;
        //
        case 'F':
          this.totEngOrd += 6;
          break;
        case 'f':
          this.totEngOrd += 6;
          break;
        //
        case 'G':
          this.totEngOrd += 7;
          break;
        case 'g':
          this.totEngOrd += 7;
          break;
        //
        case 'H':
          this.totEngOrd += 8;
          break;
        case 'h':
          this.totEngOrd += 8;
          break;
        //
        case 'I':
          this.totEngOrd += 9;
          break;
        case 'i':
          this.totEngOrd += 9;
          break;
        //
        case 'J':
          this.totEngOrd += 10;
          break;
        case 'j':
          this.totEngOrd += 10;
          break;
        //
        case 'K':
          this.totEngOrd += 11;
          break;
        case 'k':
          this.totEngOrd += 11;
          break;
        //
        case 'L':
          this.totEngOrd += 12;
          break;
        case 'l':
          this.totEngOrd += 12;
          break;
        //
        case 'M':
          this.totEngOrd += 13;
          break;
        case 'm':
          this.totEngOrd += 13;
          break;
        //
        case 'N':
          this.totEngOrd += 14;
          break;
        case 'n':
          this.totEngOrd += 14;
          break;
        //
        case 'O':
          this.totEngOrd += 15;
          break;
        case 'o':
          this.totEngOrd += 15;
          break;
        //
        case 'P':
          this.totEngOrd += 16;
          break;
        case 'p':
          this.totEngOrd += 16;
          break;
        //
        case 'Q':
          this.totEngOrd += 17;
          break;
        case 'q':
          this.totEngOrd += 17;
          break;
        //
        case 'R':
          this.totEngOrd += 18;
          break;
        case 'r':
          this.totEngOrd += 18;
          break;
        //
        case 'S':
          this.totEngOrd += 19;
          break;
        case 's':
          this.totEngOrd += 19;
          break;
        //
        case 'T':
          this.totEngOrd += 20;
          break;
        case 't':
          this.totEngOrd += 20;
          break;
        //
        case 'U':
          this.totEngOrd += 21;
          break;
        case 'u':
          this.totEngOrd += 21;
          break;
        //
        case 'V':
          this.totEngOrd += 22;
          break;
        case 'v':
          this.totEngOrd += 22;
          break;
        //
        case 'W':
          this.totEngOrd += 23;
          break;
        case 'w':
          this.totEngOrd += 23;
          break;
        //
        case 'X':
          this.totEngOrd += 24;
          break;
        case 'x':
          this.totEngOrd += 24;
          break;
        //
        case 'Y':
          this.totEngOrd += 25;
          break;
        case 'y':
          this.totEngOrd += 25;
          break;
        //
        case 'Z':
          this.totEngOrd += 26;
          break;
        case 'z':
          this.totEngOrd += 26;
          break;
      }
      //END SWITCH

    }
    //END OUTSIDE FOR LOOP



    //
    //CYPHER: FULL REDUCTION
    //FOR LOOP
    for (var i = 0; i <= this.entry.length; i++) {

      //
      switch (this.entry.charAt(i)) {

        //case ' ':
        //this.totEngOrd +=0;
        //break;
        //
        case 'A':
          this.totFulRed += 1;
          break;
        case 'a':
          this.totFulRed += 1;
          break;
        //
        case 'B':
          this.totFulRed += 2;
          break;
        case 'b':
          this.totFulRed += 2;
          break;
        //
        case 'C':
          this.totFulRed += 3;
          break;
        case 'c':
          this.totFulRed += 3;
          break;
        //
        case 'D':
          this.totFulRed += 4;
          break;
        case 'd':
          this.totFulRed += 4;
          break;
        //
        case 'E':
          this.totFulRed += 5;
          break;
        case 'e':
          this.totFulRed += 5;
          break;
        //
        case 'F':
          this.totFulRed += 6;
          break;
        case 'f':
          this.totFulRed += 6;
          break;
        //
        case 'G':
          this.totFulRed += 7;
          break;
        case 'g':
          this.totFulRed += 7;
          break;
        //
        case 'H':
          this.totFulRed += 8;
          break;
        case 'h':
          this.totFulRed += 8;
          break;
        //
        case 'I':
          this.totFulRed += 9;
          break;
        case 'i':
          this.totFulRed += 9;
          break;
        //
        case 'J':
          this.totFulRed += 1;
          break;
        case 'j':
          this.totFulRed += 1;
          break;
        //
        case 'K':
          this.totFulRed += 2;
          break;
        case 'k':
          this.totFulRed += 2;
          break;
        //
        case 'L':
          this.totFulRed += 3;
          break;
        case 'l':
          this.totFulRed += 3;
          break;
        //
        case 'M':
          this.totFulRed += 4;
          break;
        case 'm':
          this.totFulRed += 4;
          break;
        //
        case 'N':
          this.totFulRed += 5;
          break;
        case 'n':
          this.totFulRed += 5;
          break;
        //
        case 'O':
          this.totFulRed += 6;
          break;
        case 'o':
          this.totFulRed += 6;
          break;
        //
        case 'P':
          this.totFulRed += 7;
          break;
        case 'p':
          this.totFulRed += 7;
          break;
        //
        case 'Q':
          this.totFulRed += 8;
          break;
        case 'q':
          this.totFulRed += 8;
          break;
        //
        case 'R':
          this.totFulRed += 9;
          break;
        case 'r':
          this.totFulRed += 9;
          break;
        //
        case 'S':
          this.totFulRed += 1;
          break;
        case 's':
          this.totFulRed += 1;
          break;
        //
        case 'T':
          this.totFulRed += 2;
          break;
        case 't':
          this.totFulRed += 2;
          break;
        //
        case 'U':
          this.totFulRed += 3;
          break;
        case 'u':
          this.totFulRed += 3;
          break;
        //
        case 'V':
          this.totFulRed += 4;
          break;
        case 'v':
          this.totFulRed += 4;
          break;
        //
        case 'W':
          this.totFulRed += 5;
          break;
        case 'w':
          this.totFulRed += 5;
          break;
        //
        case 'X':
          this.totFulRed += 6;
          break;
        case 'x':
          this.totFulRed += 6;
          break;
        //
        case 'Y':
          this.totFulRed += 7;
          break;
        case 'y':
          this.totFulRed += 7;
          break;
        //
        case 'Z':
          this.totFulRed += 8;
          break;
        case 'z':
          this.totFulRed += 8;
          break;
      }
      //END SWITCH

    }
    //END OUTSIDE FOR LOOP



    //
    //CYPHER: PRIMES
    //FOR LOOP
    for (var i = 0; i <= this.entry.length; i++) {

      //
      switch (this.entry.charAt(i)) {

        //case ' ':
        //this.totEngOrd +=0;
        //break;
        //
        case 'A':
          this.totPrimes += 2;
          break;
        case 'a':
          this.totPrimes += 2;
          break;
        //
        case 'B':
          this.totPrimes += 3;
          break;
        case 'b':
          this.totPrimes += 3;
          break;
        //
        case 'C':
          this.totPrimes += 5;
          break;
        case 'c':
          this.totPrimes += 5;
          break;
        //
        case 'D':
          this.totPrimes += 7;
          break;
        case 'd':
          this.totPrimes += 7;
          break;
        //
        case 'E':
          this.totPrimes += 11;
          break;
        case 'e':
          this.totPrimes += 11;
          break;
        //
        case 'F':
          this.totPrimes += 13;
          break;
        case 'f':
          this.totPrimes += 13;
          break;
        //
        case 'G':
          this.totPrimes += 17;
          break;
        case 'g':
          this.totPrimes += 17;
          break;
        //
        case 'H':
          this.totPrimes += 19;
          break;
        case 'h':
          this.totPrimes += 19;
          break;
        //
        case 'I':
          this.totPrimes += 23;
          break;
        case 'i':
          this.totPrimes += 23;
          break;
        //
        case 'J':
          this.totPrimes += 29;
          break;
        case 'j':
          this.totPrimes += 29;
          break;
        //
        case 'K':
          this.totPrimes += 31;
          break;
        case 'k':
          this.totPrimes += 31;
          break;
        //
        case 'L':
          this.totPrimes += 37;
          break;
        case 'l':
          this.totPrimes += 37;
          break;
        //
        case 'M':
          this.totPrimes += 41;
          break;
        case 'm':
          this.totPrimes += 41;
          break;
        //
        case 'N':
          this.totPrimes += 43;
          break;
        case 'n':
          this.totPrimes += 43;
          break;
        //
        case 'O':
          this.totPrimes += 47;
          break;
        case 'o':
          this.totPrimes += 47;
          break;
        //
        case 'P':
          this.totPrimes += 53;
          break;
        case 'p':
          this.totPrimes += 53;
          break;
        //
        case 'Q':
          this.totPrimes += 59;
          break;
        case 'q':
          this.totPrimes += 59;
          break;
        //
        case 'R':
          this.totPrimes += 61;
          break;
        case 'r':
          this.totPrimes += 61;
          break;
        //
        case 'S':
          this.totPrimes += 67;
          break;
        case 's':
          this.totPrimes += 67;
          break;
        //
        case 'T':
          this.totPrimes += 71;
          break;
        case 't':
          this.totPrimes += 71;
          break;
        //
        case 'U':
          this.totPrimes += 73;
          break;
        case 'u':
          this.totPrimes += 73;
          break;
        //
        case 'V':
          this.totPrimes += 79;
          break;
        case 'v':
          this.totPrimes += 79;
          break;
        //
        case 'W':
          this.totPrimes += 83;
          break;
        case 'w':
          this.totPrimes += 83;
          break;
        //
        case 'X':
          this.totPrimes += 89;
          break;
        case 'x':
          this.totPrimes += 89;
          break;
        //
        case 'Y':
          this.totPrimes += 97;
          break;
        case 'y':
          this.totPrimes += 97;
          break;
        //
        case 'Z':
          this.totPrimes += 101;
          break;
        case 'z':
          this.totPrimes += 101;
          break;
      }
      //END SWITCH

    }
    //END OUTSIDE FOR LOOP


    //SET VALUES of ENTRY

    this.engOrd = this.totEngOrd;
    this.fulReduc = this.totFulRed;
    this.primes = this.totPrimes;



    //this.totEngOrd = 0;
    //this.totFulRed = 0;
    //this.totPrimes = 0;

    //this.entry = af.database.list('/gematriaResults/');
    /*
    database.ref("-gematriaResults/-result/wordPhrase").set(this.entry);
    database.ref("-gematriaResults/-result/englishOrdinal").set(this.engOrd);
    database.ref("-gematriaResults/-result/fullReduction").set(this.fulReduc);
    database.ref("-gematriaResults/-result/primes").set(this.primes);
    database.ref("-gematriaResults/-result/numberOChar").set(this.numOChar);
    */

  }
  //END OF calGema
  
}
