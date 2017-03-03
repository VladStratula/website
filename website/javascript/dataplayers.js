function searchplayers()
{

  var women=[

  { country:"RUS",
    firstname:"Yulia",
    lastname:"Abalakina",
    gender:"F",
    age:"24"
  },
  { country:"RUS",
    firstname:"Ilmira",
    lastname:"Abdulina",
    gender:"F",
    age:"19"
  },

  { country:"RUS",
    firstname:"Natalia",
    lastname:"Abolmassova",
    gender:"F",
    age:" "
  },
  { country:"RUS",
    firstname:"Anna",
    lastname:"Allova",
    gender:"F",
    age:"26"
  },
  { country:"RUS",
    firstname:"Olesia",
    lastname:"Andreiuk",
    gender:"F",
    age:"15"
  },
  { country:"RUS",
    firstname:"Evguenia",
    lastname:"Artamonova",
    gender:"F",
    age:"40"
  },
  { country:"RUS",
    firstname:"Elena",
    lastname:"Batoukhtina",
    gender:"F",
    age:"44"
  },
  { country:"RUS",
    firstname:"Natalia",
    lastname:"Belova",
    gender:"F",
    age:"27"
  },
  { country:"RUS",
    firstname:"Alexandra",
    lastname:"Ivanova",
    gender:"F",
    age:"21"
  },
  { country:"RUS",
    firstname:"Anna",
    lastname:"Kiseleva",
    gender:"F",
    age:"25"
  },
  { country:"RUS",
    firstname:"Anastasia",
    lastname:"Kolesnikova",
    gender:"F",
    age:"21"
  },

  { country:"ENG",
    firstname:"Ellie",
    lastname:"Austin",
    gender:"F",
    age:"14"
  },
  { country:"ENG",
    firstname:"Eleanor",
    lastname:"Cranch",
    gender:"F",
    age:"18"
  },
  { country:"ENG",
    firstname:"Zara",
    lastname:"Dampney",
    gender:"F",
    age:"29"
  },
  { country:"ENG",
    firstname:"Sohpie",
    lastname:"Szyszko",
    gender:"F",
    age:"20"
  },
  { country:"ENG",
    firstname:"Victoria",
    lastname:"Palmer",
    gender:"F",
    age:"29"
  },
  { country:"ENG",
    firstname:"Jessica",
    lastname:"Grimson",
    gender:"F",
    age:"25"
  },
  { country:"ENG",
    firstname:"Grace",
    lastname:"Lazard",
    gender:"F",
    age:"19"
  },
  { country:"ENG",
    firstname:"Savanah",
    lastname:"Leaf",
    gender:"F",
    age:"22"
  },

  { country:"FRA",
    firstname:"Melinda",
    lastname:"Adelin",
    gender:"F",
    age:"28"
  },
  { country:"FRA",
    firstname:"Ethel-Julie",
    lastname:"Arjona",
    gender:"F",
    age:"34"
  },
  { country:"FRA",
    firstname:"Justine",
    lastname:"Astruc",
    gender:"F",
    age:"32"
  },
  { country:"FRA",
    firstname:"Adele",
    lastname:"Bardouillet",
    gender:"F",
    age:"39"
  },
  { country:"FRA",
    firstname:"Ines",
    lastname:"Ben Jaddi",
    gender:"F",
    age:"18"
  },
  { country:"FRA",
    firstname:"Muriel",
    lastname:"Benazeth",
    gender:"F",
    age:"50"
  },
  { country:"FRA",
    firstname:"Clarisse",
    lastname:"Bourguignon",
    gender:"F",
    age:"22"
  },
  { country:"FRA",
    firstname:"Vanessa",
    lastname:"Bonacossi",
    gender:"F",
    age:"30"
  }];
  var men=[
    { country:"RUS",
      firstname:"Igor",
      lastname:"Abdrakhmanov",
      gender:"M",
      age:" "

    },
    { country:"RUS",
      firstname:"Maxim",
      lastname:"Adonin",
      gender:"M",
      age:"30"
    },
    { country:"RUS",
      firstname:"Lipezin",
      lastname:"Alexey",
      gender:"M",
      age:" "
    }
    ,
    { country:"RUS",
      firstname:"Yutvalin",
      lastname:"Alexey",
      gender:"M",
      age:" "
    }
    ,
    { country:"RUS",
      firstname:"Sergey",
      lastname:"Alfimov",
      gender:"M",
      age:"29"
    }
    ,
    { country:"RUS",
      firstname:"Vasili",
      lastname:"Andrianov",
      gender:"M",
      age:"30"
    }
    ,
    { country:"RUS",
      firstname:"Anton",
      lastname:"Anosov",
      gender:"M",
      age:"25"
    }
    ,
    { country:"RUS",
      firstname:"Oleg",
      lastname:"Antonov",
      gender:"M",
      age:" "
    }
    ,
    { country:"RUS",
      firstname:"Maxim",
      lastname:"Anufriev",
      gender:"M",
      age:"23"
    }
    ,
    { country:"RUS",
      firstname:"Dmitry",
      lastname:"Areshkin",
      gender:"M",
      age:"47"
    },
    { country:"ENG",
      firstname:"Sam",
      lastname:"Allen",
      gender:"M",
      age:"19"
    },
    { country:"ENG",
      firstname:"Tom",
      lastname:"Allen",
      gender:"M",
      age:"18"
    },
    { country:"ENG",
      firstname:"Matthew",
      lastname:"Hunter",
      gender:"M",
      age:"22"
    },
    { country:"ENG",
      firstname:"Tom",
      lastname:"Lord",
      gender:"M",
      age:"19"
    },
    { country:"ENG",
      firstname:"Joshua",
      lastname:"Randall",
      gender:"M",
      age:"26"
    },
    { country:"ENG",
      firstname:"Jake",
      lastname:"Sheaf",
      gender:"M",
      age:"25"
    },
    { country:"ENG",
      firstname:"Philip",
      lastname:"Smith",
      gender:"M",
      age:"30"
    },
    { country:"ENG",
      firstname:"Harry",
      lastname:"Jones",
      gender:"M",
      age:"18"
    },
    { country:"ENG",
      firstname:"Luke",
      lastname:"Sheaf",
      gender:"M",
      age:"27"
    },
    { country:"FRA",
      firstname:"Nicolas",
      lastname:"Agnese",
      gender:"M",
      age:"37"
    },
    { country:"FRA",
      firstname:"Thomas",
      lastname:"Agnese",
      gender:"M",
      age:"36"
    },
    { country:"FRA",
      firstname:"Hugo",
      lastname:"Alimi",
      gender:"M",
      age:"23"
    },
    { country:"FRA",
      firstname:"Yousri",
      lastname:"Anegay",
      gender:"M",
      age:"19"
    },
    { country:"FRA",
      firstname:"Nicolas",
      lastname:"Aubrun",
      gender:"M",
      age:"27"
    },
    { country:"FRA",
      firstname:"Jerome",
      lastname:"Auclaire",
      gender:"M",
      age:"39"
    },
    { country:"FRA",
      firstname:"Hamid",
      lastname:"Badoro",
      gender:"M",
      age:"23"
    },
    { country:"FRA",
      firstname:"David",
      lastname:"Badrignans",
      gender:"M",
      age:"39"
    }];

  //display men by name (even if the user knows only the name of the player but not the country he or she comes from)
  document.getElementById("tablee").innerHTML="<tr><th>Country</th><th>Firstname</th><th>Lastname</th><th>Gender</th><th>Age</th></tr>";
  for(var x=0;x<men.length;x++){
  if((document.searchplayer.player.value==men[x].firstname && document.searchplayer.filter[0].checked)|| (document.searchplayer.player.value==men[x].firstname && document.searchplayer.filter[0].checked && document.searchplayer.country.value==men[x].country))
  document.getElementById("tablee").innerHTML+="<tr><td>"+men[x].country+"</td><td>"+men[x].firstname+"</td><td>"+men[x].lastname+"</td><td>"+men[x].gender+"</td><td>"+men[x].age+"</td></tr>";
//display men by country ONLYIF the user knows ONLY the country
  else if(document.searchplayer.country.value==men[x].country && document.searchplayer.filter[0].checked && document.searchplayer.player.value==""){
    document.getElementById("tablee").innerHTML+="<tr><td>"+men[x].country+"</td><td>"+men[x].firstname+"</td><td>"+men[x].lastname+"</td><td>"+men[x].gender+"</td><td>"+men[x].age+"</td></tr>";
    style();
  }

}



//display women by name  (even if the user knows only the name of the player but not the country he or she comes from)
  for(var y=0;y<women.length;y++){
    if((document.searchplayer.player.value==women[y].firstname && document.searchplayer.filter[1].checked) || (document.searchplayer.player.value==women[y].firstname && document.searchplayer.filter[1].checked && document.searchplayer.country.value==women[y].country))
  document.getElementById("tablee").innerHTML+="<tr><td>"+women[y].country+"</td><td>"+women[y].firstname+"</td><td>"+women[y].lastname+"</td><td>"+women[y].gender+"</td><td>"+women[y].age+"</td></tr>";
  //display women by country ONLY IF the user knows ONLY the country
  else if(document.searchplayer.country.value==women[y].country && document.searchplayer.filter[1].checked && document.searchplayer.player.value==""){
    document.getElementById("tablee").innerHTML+="<tr><td>"+women[y].country+"</td><td>"+women[y].firstname+"</td><td>"+women[y].lastname+"</td><td>"+women[y].gender+"</td><td>"+women[y].age+"</td></tr>";
  style();
  }
}
}
//clear form field after text was added
function clearform(){
  eraseText();
  searchplayers();



  document.getElementsByName('searchplayer')[0].reset();
}
//clear table all the time when there is a new 'search'
function eraseText()
{
  document.getElementById("tablee").innerHTML="";
}

//style the even rows
function style()
{ var row=document.getElementById("tablee").getElementsByTagName("tr");
  for (var z=0;z<row.length;z++)
  {
    if(z%2==0)
  row[z].style.background="orange";}}
