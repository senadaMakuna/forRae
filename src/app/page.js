"use client"

import React from "react";
import Typewriter from 'typewriter-effect';


export default function Home() {
  const mytext = [
    'haiii gimana kabarnyaa?',
    'baik baik kann?',
    'harus baikbaikk lohh!!',
    'hmmm',
    'mulai dari manaa yaa',
    'oyaa ini kyanya bakal lamaa dehh, jdi kmu boleh bgt buat lgsg close aja ehehe...',
    'dan ini jga bakal ab gaaktifin lgi webnya ehehe',
    'eh.. masi dsnii? ^-^',
    'makasi yaa udaa ngeluangin waktunyaa',
    'hmm ab minta maap dulu ggara ga brani langsung ngomong ke kamu',
    'maap juga malah pake ginian buat trus terangnyaa ehehehe',
    'jjur abi gtau harus mulai drimanaa ngmonginnyaa',
    'oiyaa ab bkin gnian juga bkan brati abi nyari simpati kamu atw apapun yaa',
    'inima murni wee yg abi pen omongin ke kamu',
    'jdii gnii',
    'sbnernya ab jgaa aneh ke diri sndiri knapa sbgai cowo ab labil bgt',
    'ab gtauu knapa ab wktuitu kyagtu kkamuu',
    'tiap hari ab slalu nhann diri buat ngchat kmuu dann nyari nyari ksibukan biar ga kpkiran hehehe',
    'yaa emg ab yg bilang udh ajaa',
    'tpi...',
    'seinget ab, ab jga gprna bilang ab uda gada rasa',
    'oyaa wktu itu ab smpet ngliat sg sec acc kamu klo gasalah dan ab pen reply pas itu tpi abi tahan trus smpe lupa ehehe',
    'tebakk ab mau reply gmnaaa',
    'salahhh',
    'ab mw reply klo kmu emg slalu ab anggap rumahh ehehe',
    'ehehe',
    'mungkin emg bahasa "buaya" yakk tpi balik lgi abi bkin gnian cuma buat nyampein apa yg ab pen omongin ke kamu..',
    'trus abis itu tbatba ab gpernah lagii tuu ngliat sg kamu',
    'ab kiraa emang kmu yg ga bikin sg ajaa',
    'ab bru ngeh kmu removee ab pas ada notif theme dmnyaa dganti..',
    'jd yaa ab gbsa nahan diri abi buat ngchat kmuu wktuitu dann akhirnya ab bkin gnian jugaa ehehee..',
    'ab sbnernya gamau ngganggu kamu lagii',
    'cmaa yaa... maapin yaakkkk',
    'ab emang jelek komunikasinya, dalam sgala hal',
    'dpikiran ab banyak yg mau diomongin tpi gtau knapa yg bneran dsampeinnya cuma bberapa',
    'mkanyaa kkamugee ab sering bgt dikit balesannyaa dri chat kmu yg bnyak',
    'tpi ab jga gmau ngeles,',
    'ab bnyak banget nyadar klo ab bkann yg trbaik bwt kamuu',
    'mkanya ab jga ksel k diri sndirii',
    'dtambah wktuitu bnyak pkiran dri tugas, tuntutan, smaa',
    'keluarga ehehe',
    'bsa dbilang ab wktuitu udh nyerahh bgt sama smuanya',
    'cape bgtt',
    'tpi ab gngerti bgt knapa ab jd kyagtu kkamu..',
    'maapp bgtt',
    'truss apaa yaaa.. bingung jugaa ehehe..',
    'oyaaa',
    'mungkin emang blm waktunya lagi kita smasmaa',
    'atw mungkin emg udh gkan smasmaa lagii',
    'tpi ttep....',
    'ab slalu anggap kmu rumah ehehe',
    'tpi ab jgaa gppa klo misal kmu emg udh ada org lain..',
    'biarin abii tauu klo emg kyagitu yakk biar ab juga tenang ajaa gtuu',
    'eh gamaksa sii tserah kmu jugaa ehehe',
    'oyaa',
    'gtau knpaa tpi minggu ini kyanya ab sring banget mmpiin kmuu dan ab slalu mnta maap k kamuu tpi kya gprna dtanggepin gtu :(',
    'oyaa trus ab jga emg udh ganti pp wa, bio ig, tpi ab jga gtau knpa dri wktuitu ab gbisa buat ngganti bio wa abi..',
    'kya emg diri ab yg nglarang aja gitu',
    'hmm trus apalagi yaa,',
    'bingung si..',
    'udah deh segini aja ehehehe',
    'skali lagi mkasi uda ngeluangin wktunyaa buat bacain teks panjang gini yg gapenting sma gjelas gnii wkwkwk',
    'baiii raee',
  ]

  return (
    <main>
      <div className="flex justify-center items-center h-screen">
        <div className="flex justify-center items-center min-h-screen">
          <div className='w-auto p-7 rounded-lg text-justify text-xl font-bold'>
            <Typewriter
              options={{
                strings: mytext,
                autoStart: true,
                loop: false,
                deleteSpeed: 5,
                delay: 65,
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
