import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data;

  constructor(private http: HttpClient) {}

  akcioniPlan() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=akcioniplan&lang=sr&term=json")
  }

  nacionalniOkvirKvalifikacijaOpisNivoa() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=noks_deskriptori&lang=sr&term=json")
  }

  nacionalniOkvirKvalifikacijaNivoi() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=noks_nivoi&lang=sr&term=json")
  }

  skolskeUprave() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=suprave&lang=sr&term=json")
  }

  okruzi() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=okruzi&lang=sr&term=json")
  }

  opstine() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=opstine&lang=sr&term=json")
  }

  prosvetniKartonOsnovnihSkola() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=pk_osnovne15&lang=sr&term=json")
  }

  prosvetniKartonStrucneSkole() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=pk_strucne15&lang=sr&term=json")
  }

  prosvetniKartonMesoviteSkole() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=pk_mesovite15&lang=sr&term=json")
  }

  prosvetniKartonGimnazije() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=pk_gimnazije15&lang=sr&term=json")
  }

  javniPozivZaListuUdzbenikaIzdavaci() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=jpl_izdavaci&lang=sr&term=json")
  }

  javniPozivZaListuUdzbenikaKompleti() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=jpl_kompleti&lang=sr&term=json")
  }

  skole() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=skole&lang=sr&term=json")
  }

  skolskeLokacije() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=maticne_izdvojena&lang=sr&term=json")
  }

  brojOdeljenja() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=broj_odeljenja&lang=sr&term=json")
  }

  brojNekombinovanihOdeljenjaUOsnovnimSkolamaPoJezicima() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=odeljenja_jezik&lang=sr&term=json")
  }

  grupaUOsnovnimSkolamaKojeUceMaternjiJezikSaElementimaNacionalneKulture() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=odeljenja_govor&lang=sr&term=json")
  }

  brojKombinovanihOdeljenjaUOsnovnimSkomalaPoJezicimaISkolama() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=kombinovana_jezik&lang=sr&term=json")
  }

  brojOdeljenjaUSrednjimSkolamaRazvrstanihPoJezicimaNaKojimaSeOdvijaNastava() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=br_odeljenja_sr&lang=sr&term=json")
  }

  visokoskolskeUstanove() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=vsustanove2016&lang=sr&term=json")
  }

  studijskiProgrami() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=sprogrami2016&lang=sr&term=json")
  }

  pregledZvanjaNaVisokoskolskimUstanovama() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=vo_zvanja2016&lang=sr&term=json")
  }

  pregledZvanjaNaVisokoskolskimUstanovamaPoUstanovama() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=vo_ustanove_zvanja2016&lang=sr&term=json")
  }

  pregledVrstaRadnihMestaNaVisokoskolskimUstanovama() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=vo_rmesta2016&lang=sr&term=json")
  }

  pregledNastavnihVrstaRadnihMestaNaVisokoskolskimUstanovama() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=vo_ustanove_rmesta2016&lang=sr&term=json")
  }

  pregledNastavnihVrstaRadnihMestaNaVisokoskolskimUstanovamaPoUstanovama() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=vo_ustanove_nnrmesta2016&lang=sr&term=json")
  }

  prihodiVisokoskolskihUstanova() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=vo_ustanove_prihodi&lang=sr&term=json")
  }

  visokoskolskeUstanoveOstaliIndikatori() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=vsustanove_indikatori&lang=sr&term=json")
  }

  brojUcenikaIOdeljenjaUNekombinovanimOdeljenjimaPoSmerovimaUSrednjimSkolamaU2015i2016() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=broj_ucenika_smerovi_15&lang=sr&term=json")
  }

  izborniPredmetiUOsnovnimSkolama() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=os_izborni_predmeti&lang=sr&term=json")
  }

  odeljenjaSaCelodnevnomNastavom() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=os_celodnevna15&lang=sr&term=json")
  }

  grupe() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=os_grupe15&lang=sr&term=json")
  }

  grupeNacionalneManjine() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=os_grupe_govori15&lang=sr&term=json")
  }

  grupeStraniJezici() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=os_grupe_jezici15&lang=sr&term=json")
  }

  izdvojenaOdeljenjaOsnovneSkole() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=os_izdv_odelj15&lang=sr&term=json")
  }

  kombinovanaOdeljenja() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=os_komb15&lang=sr&term=json")
  }

  obavezniPredmetUKombinovanimOdeljenjima() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=os_komb_odelj_obav15&lang=sr&term=json")
  }

  maticneOsnovneSkole() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=os_maticne_skole15&lang=sr&term=json")
  }

  nekombinovanaOdeljenja() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=os_nekombinovana15&lang=sr&term=json")
  }

  rashodiVisokoskolskihUstanova() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=vo_ustanove_rashodi&lang=sr&term=json")
  }

  fondCasovaObaveznihPredmetaUOsnovnimSkolama() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=os_obav_predmeti&lang=sr&term=json")
  }

  odeljenjaObavezniPredmeti() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=os_odelj_obav_predmeti15&lang=sr&term=json")
  }

  grupePedskolsko() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=os_predskolska15&lang=sr&term=json")
  }

  podaciOOsnovnimSkolama() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=os_skole15&lang=sr&term=json")
  }

  vrsteSkola() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=vrste&lang=sr&term=json")
  }

  podaciOSrednjimSkolama() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=ss_skole15&lang=sr&term=json")
  }

  odeljenjaSrednjihSkola() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=ss_odeljenja15&lang=sr&term=json")
  }

  kombinovanaOdeljenjaSaViseOdJednogObrazovnogProfila() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=ss_kombinovana15&lang=sr&term=json")
  }

  kombinovanaOdeljenjaZajednickiPredmeti() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=ss_komb_zaj_predm15&lang=sr&term=json")
  }

  kombinovanaOdeljenjaOstaliPredmeti() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=ss_komb_ost_predm15&lang=sr&term=json")
  }

  blokNastava() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=ss_blokovi15&lang=sr&term=json")
  }

  vezaIzmedjuBlokNastaveINastavnika() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=ss_blok_nastavnik15&lang=sr&term=json")
  }

  obavezniPredmetiUSrednjimSkolama() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=ss_predmeti15&lang=sr&term=json")
  }

  izborniPredmetiUSrednjimSkolamaPoNastavnomPlanu() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=ss_izb_pred15&lang=sr&term=json")
  }

  postojeciObrazovniProfilUSrednjimSkolama() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=ss_smerovi&lang=sr&term=json")
  }

  sifarnikPodrucijaRadaUSrednjimSkolama() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=ss_podrucja_rada&lang=sr&term=json")
  }

  maticneSrednjeSkole() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=ss_maticne_skole15&lang=sr&term=json")
  }

  izdvojenaOdeljenjaSrednjeSkole() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=ss_izdv_odelj15&lang=sr&term=json")
  }

  obavezniPredmetiUSrednjimSkolamaPoProfilima() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=ss_odelj_obav_predm15&lang=sr&term=json")
  }

  planUpisaUSrednjeSkoleZa2016i2017SkolskuGodinu() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=upis&lang=sr&term=json")
  }

  brojUcenikaIOdeljenjaUOSPoJezicima() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=broj_odeljenja_i_ucenika&lang=sr&term=json")
  }

  jeziciNaKojimaSeOdvijaNastava() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=jezici_nastave&lang=sr&term=json")
  }

  naucnoistrazivackeOrganizacije() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=nio&lang=sr&term=json")
  }

  naucnoistrazivackeOrganizacijeMesecneFinansije() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=nio_finansije&lang=sr&term=json")
  }

  naucnoistrazivackeOrganizacijeGodisnjeFinansije() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=nio_gfinansije&lang=sr&term=json")
  }

  naucnoistrazivackiProjekti() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=nid_projekti&lang=sr&term=json")
  }

  naucnoistrazivackiProjektiMesecneFinansije() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=nid_projekti_finansije&lang=sr&term=json")
  }

  naucnoistrazivackiProjektiGodisnjeFinansije() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=nid_projekti_gfinansije&lang=sr&term=json")
  }
}
