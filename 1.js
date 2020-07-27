{
let kolicina = 9
let cenaPoKomadu = 180
let godine = 21
racunUkafani = kolicina * cenaPoKomadu

      if(godine % 7 == 0){
        console.log(`Vas racun je : ${racunUkafani * 0.85} rsd`)
    } else if(godine % 11 == 0){
        console.log(`Vas racun je : ${racunUkafani * 0.2 } rsd`)
    } else {
        console.log(`Manje od 18godina`)
    }
}