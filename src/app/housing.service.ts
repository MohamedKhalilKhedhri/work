import { Injectable } from '@angular/core';
import { Gallery } from './gallery';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  gallerie: any;

  constructor() { }

  gallery : Gallery[] =[
    { id:1,
      lecture:"img",
      type:"animal",
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrQXnY5LnBDikweokTMTsupKR7YV5RQlpNTg&usqp=CAU",
      decription:"Adorable Cute Can i take a bite"
    }
,
    { id:2,
      lecture:"img",
      type:"nature",
      url:"https://imgs.search.brave.com/D4yK-sOFyvh_xTqbl_aO3Xu6icdpoxgVLVthiqsqYvo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93MC5w/ZWFrcHguY29tL3dh/bGxwYXBlci8xMDI0/Lzk0MC9IRC13YWxs/cGFwZXItaW4tdGhl/LXdvb2RzLXdvb2Qt/Zm9yZXN0LWhvdXNl/LXJpdmVyLmpwZw",
      decription:"I WISH I HAD A HOUSE IN FOREST AND SOME ANIMALS "
    }
,
    { id:3,
      lecture:"img",
      type:"animal",
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8FNuVdaYwtzioLE9ojnYFlYmbL1WWE47k69_zndwGm3loV84p4petMJfSspoxxg4kEWs&usqp=CAU",
      decription:"Fast as *@#!k Boiii"
    },
    { id:4,
      lecture:"img",
      type:"people",
      url:"https://scontent.xx.fbcdn.net/v/t1.15752-9/376390425_1550766395726892_4486413695753609179_n.png?stp=dst-png_p206x206&_nc_cat=103&ccb=1-7&_nc_sid=510075&_nc_ohc=UQ8UzR2zmS0AX_R08nx&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTxqOsP4khoyHo_SuIp3tbwv4qOYE2KcUqu0tJgT_qGxg&oe=65940725",
      decription:"mission succeed : photo opened without getting bombed !"
    }, { id:5,lecture:"img",
      type:"people",
      url:"https://scontent.xx.fbcdn.net/v/t1.15752-9/369044840_317432957908317_943436733563051499_n.png?stp=dst-png_s240x240&_nc_cat=101&ccb=1-7&_nc_sid=510075&_nc_ohc=51p4w2BpgMwAX9zf1tq&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdStCq3GJVdJLNHW1q605D6NxGIAENsHm53WJbFIiwLyGQ&oe=6593EE59",
      decription:"dond dell me what do do"
    },
    { id:6,
      lecture:"img",
      type:"animal",
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRANby6Ll4X6w9L99mhii3eYfw9DqnEQAekrA&usqp=CAU",
      decription:"They calling a man wolf but we are traitors instead of calling them dogs because dogs are loyal"
    },
    { id:7,
      lecture:"img",
      type:"animal",
      url:"https://live.staticflickr.com/735/32901852082_38ee69309d_z.jpg",
      decription:"It was a lie baaaaaaaaaka "
    },
    { id:8,
      lecture:"img",
      type:"people",
      url:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a51002b5-f37a-47bc-90ce-eb9a499854f3/dg2bg2i-99c2994a-3212-4ca5-b3b9-9f9676390089.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E1MTAwMmI1LWYzN2EtNDdiYy05MGNlLWViOWE0OTk4NTRmM1wvZGcyYmcyaS05OWMyOTk0YS0zMjEyLTRjYTUtYjNiOS05Zjk2NzYzOTAwODkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.PDntkahz3lSAwlhNfmY7WxyDS1Ph9MpzDIt64pKomk8",
      decription:"A dream that will never comes true , iam broke.. god please one like her  :( "
    }
    , { id:9,
      lecture:"img",
      type:"nature",
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP58kGy3mM9S5DGfOXcv_OdDxa__MkdFM1uA&usqp=CAU",
      decription: "The hottest thing we got xd"
    },
    { id:10,lecture:"img",
      type:"nature",
      url:"data:image/jpeg;base64,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",
      decription:"fooooooooooorest"
    },
    { id:11,lecture:"img",
      type:"people",
      url:"https://scontent.xx.fbcdn.net/v/t1.15752-9/370229525_893084199070434_3498288973540801462_n.jpg?stp=dst-jpg_p206x206&_nc_cat=100&ccb=1-7&_nc_sid=510075&_nc_ohc=b9gmauybFtUAX831dHn&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRGB12aSnKeNWurhdWXpc9Sy0N23WaKc9VTI1Bsyex_gg&oe=6593F74A",
      decription:"Ben 10 , Ben 10 i like his alien called upgrade upgrade things with zero tears :'("
    }, { id:12,lecture:"vid",
    type:"nature",
    url:"../assets/Standing Here, I Realize [Ricardo vs The Rock].mp4",
    decription:"Mother Nature"
  },
    { id:13,lecture:"img",
      type:"nature",
      url:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBcVFBUYFxcZGiMcGRoaGhwiHRsiIxwcIyIdIiIgICwjHRwoHSIgJTUkKC0vMjIyHCI4PTgwPCwxMi8BCwsLDw4PHRERHTEoIygzMTEzMTExMTMxMTExMTExMTExMTExMTMxMTExMTExMTExMTExMTExMTExMTExMTExMf/AABEIALQBGAMBIgACEQEDEQH/xAAbAAADAAMBAQAAAAAAAAAAAAADBAUAAgYBB//EAEEQAAECBAQEAwYFAgUDBAMAAAECEQADITEEEkFRBSJhcROBkTKhscHR8AYjQlLxFOEzQ2JykhVTsiRzg7M0Y4L/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAtEQACAgICAQIDCAMBAAAAAAAAAQIRITEDEkEEURORoSIyQmFxgbHwUsHRFP/aAAwDAQACEQMRAD8A+XrlkpV0T8B0EIqPImuppD0yY4Uwcczhx7quzQpMI8JG7nXvERLZvKWwTtrsK37dIXF2vWnrDkhTy8oDnT30hEFlU0NPWKRIechy4Zn007xrMHMPL4/GDrcKUAOV7+Yod6sKwOenKU6uHpAMJLQal9Tcjf4xoq4f75frG0peVRCgCOtx7xWPGHLYgN8LtCAyRMSl3BNfKBzlc4I6N8vOMy3ff6bxqRzJ8ukFZsLxRuhJKjQvsBW8OpRyMpVTUBy5DFgAKEE++EPE5nDim8GTibFRzKFU9D9gQNMAAd1AlrwNKqxstbqUdyTAxDJDqNAdqdN2giUksWYUsYAlJLUsfnDcyXMDA/qqAO9u8JjGEz1lQfmbcPtevv6Q+rBESypAUpCSBNZDs7EE0YAjXtEqWShaSp0gsXBvrcfC8VlY/JycwchlKBYJZm6hqO2p0hXQMnYidlmOxGZFXvs1ITMwAEBtX98N4yelc1JdwU1ID1N3eJ+SqujtbSKEbhRI1qb1baCyk3BWOwN21+6wXD8yCKMnpfckt7u1DB5+AJb/AA3V7OVQqAKvXUwVYC39NUU6H7aNVYVSQokEJB27t7oNJw6mOYkEaPW7eunl5Q7iFrZQL8yq20CqsdW+J2ibp0BLHMA3d9bsYd4TwaZNmBGUt01ZjSux0qHgLDM7AVqB7N7CO14Rx6SpSUrC5Ux0kzcqRlplKUtQIZhlIU/NSrio1YM3lYZSUhEpaV+GSmYgpdKdQElX+aKihAIIqHESBwdKCec5SClbMVFRA5WBDOXSOiVKdqRV/FiDJHiyJx8KYAFAMxOV6kllEg6XrcmOZkY5SqrAyAjlKQM7WCiwGVv03uNYtuhJDWFkJWoqlBDJSHWtTB9cgd1myQmxq5DmIk9IJX4igVAAJIGoUxAAoAK/zHVniKJwzlKpITX8kKLEXylzkcEF6HTZubnYZIUoVIDlVQ4bc6302hNjRIWY3loN4am4f2CksVU89fvqIxGHJ1f5099PhEWOgKJxFGcbx4pYJDC0bmVUprTZr/SAqQwq7aQxh0qRXbr2jIAUlwfTWMhUIpzpcvnTmUFJrmuFOLENQvEkg5Rs8VkT5YWVULmykpIa1w3N1+ETieQDZW/Tb5wRGw2HVygDrv8Af8QkoVI6wzhls3xZzAZg5j3PxhkjSFkKI/U486pY3+3jzHAuHLsBrowYeVo9mJrmqCLWq2Q71qT6DyFiSkkFLjlS76lqns9oB2NJkFcxeUBzUbCp91LwtOTVIcfSphuXPUc5CkjMgZibgBWjUcvb7PmNksiUfacHWn+IsW6sDC9h7sUUb2dxUeUb4+6avyCvu84GoMVMRcfWC4+W3huQXR6c6hB5DwL5OYgV+xtBAoAVTXtB+HpUJrMFUIIJDN3doPN4asAkoYG1Wa9K2sd4HJJ0wSJSjUx7JS5H1aNloIUQ320ayiXpf+0Mk9zkdniiQAkLSp3IcPUVodz27ROUNo8UCKQmrGV8JOy8ytACynZwLVpVh5aQPFTjMWStJBNamo6AlqPC8nHEUWAsZWAIFOtriGkqBdZSkilCQw2uXOsKqDYkpQzpKWtT3wvMUcyjapg5UCtLmmvTtC6rnzikIo8MKi4Sspd6gdqOCMrsI3xMiYteQuTmISQFMqo1N/rCeFNr3NQQNN4tf1ZWEiZcUzBIs9wQoOdfMwN0FEMFUtRGrMx+7g/CCJxpKipYzOzh9BoPvSKuNxKJilFacyi3OQQNNBSo0+EQMtWFYWGA/wD9RJdxq4YDXc/2ilK4ikJyoTndnC3YMdah9qFqioiJIyMc+bozN1JqOkdJ+GOMSpKgDKlnNTOU5lJckFgRsbFxQeTUUJiE/ET3OdKlA1AWAQLGidCKNqAWjbDJUsqyoZYD5S2lyxvf4R2/G8VKUyJiGmhLyZoGYTU/sWxLMwIN7nUvyuIxZQtSEIzJBAUDmewIB1NhTYaQ5IEzJPFFyZucS2U3PzOFZnLukjrUFrubwt+IznmBcvKy05qFGmV7ADY+vWL44tJWkS5ksylpGaUopLE3OYAH2g9f4MGXJWZppmQ5cpfmGib2diRS/lCbpDSJqZi8wpmALtS5A+kbrw6kkM7iu/YD306xUGcOkoDs6szML/tJbSghRIWahKRSjvU1rpTTbveI7GqiLmUkO4IvrTZhqasw663IUoYgrqdtulNYbnJq61up3BHshw7gbNV9oXVLzgJSD0B2Hma2hpiaBFTqcMwrVm9/lGQReEb2TW5dqb+QapNIyGSFl4NJmLQScwqkU7s+7fAwm35ZDWWH6UMX8PhnmTMwJSbECrirAvyqBSR3iUpvDmAMCFh3oSXVboPmYlS/0NoXwSFKIA3Ol6fGBTpeVRB9WPz1hvh2ZS2Ach2uLDp8Osa44/mLuFZy4YACpejn4xV5JrBvKTUApISVAUFSCU0pe3r5wtjAUqbQpSehOUP74eCWlpVaoV6KUzekKcRmnML1Sg11/LQH9z+cJbG0MZ8qSAAoGWoAt/tJ8xUPXWD4ogokmpY6f+4py9sxp5whMmgIAN66UIIABHZiIexQIQilAtQAp/3H+faB+BryKY+SEzJicz+yXu7pBvvX4wDFAsh7MW/5n5vBsWgZjVzqzUboPu5j3iL+HKq6QFBNG/U595h3lBWGaIlErNCLaWqBFadhShUxGcEZS4CvaUxCVCjAOxv06BCYgmY2odxlP7hvD0tQUJysn+SSkPYhbud9oGrJIc1DLIt/DxrhhzDvD+NQk4hgkoBAcG75a3hDDpdSRvSGAacALXcv0qGjJqaXB7Rk+WASH1p5/wAQfOMhDFyNvTyFetYkoDLWBQpB+/fGLSUmhOXvuLUpG8xAAcGrUjZGHUSwF94VhQstyRGhln4waZKUlTKoQbRopZe8OxUMYFCiCkAXd2cjtUfbxk8FTuoZhfr6D42jXDKNgM1fsHp5xVw2HlpBUWzl2DkGxZhs/uHdhugoRw7lOVS6A0Q5AV090DmZSs1YEB9MvQdDBJ+HzF0IIBdgBTq294UTKUV5Xqz/AMw0IcRw5gkkhOckJenUVt07wWTg2WgBLKKmSpRKUKL6K0rqSL+cDTjZiAEuCP2kbG9R0/mK3AuJyQpScQgGUoNMBBJdixCqqSxsBlDs9BBHeQYzxKYo4ZKJmHEpUv2VoLkks4VWprmZ9RsqIKZ0xYZaioAakULeum8EnzwqX4YSAgeySQ4rZ2daRW7XNKARMSOYCkOTsSK8rDLWyCUkC5DuAGDULNVrdIfVNlynQEpUGAuzfM0r3G1IiSZmQulZBbds3SlhrGCWkqJWoFupufKvaM2r2aJ0WFS0FLqSlzo16AtUUNWtcHtGLnAS0uySq/ozDoLtpvEvEYpycrs7j4O/b3GN5eNSlIJAURvYai4r16CF1ZXZAsWsgPVSi9SPZB6VunTz1gAmFKQHqakPToDuBtuekazFlRUpnOtbHeArcm19q6xokZtljhipQ8QzyVPlAIWQHY0NGOnv6xke8KVMKphTLC2Ac5wlSWFWJDAEO7jbzyKJGJUxpipikkglyQPZc7NUOToYlzUJafW0wN2zKH0PlFbhhSAULSoTbgKcOlgws6nL07wjPUAhWUjIVUs4qbj2TRq9OsYp5otmnApYVMymxCq7HKa/ffpCWJH5igS7Fn3aj1hzBpCF5gpwBcM4JoxD20cQtxIvNmEWzUi/ILQ4oqMtIFQxId9FKDavV4X4vLyrS9XQh9K+Ggt2qIZROAlIuWQst/8A2adA1e8Z+JD+aWb9IPlKlb2q8JbB6A4yV+VKW71b3O3asC8Sj9aDzEUJEl5Uogj/ABUsD/uA9PrE1IZ06UOm4JgTGx3G4VpiykMkAO+xH10hXFp5UOaMpnfpbq8NKP5q0hmZgXDVDUrqC94FjkshIZWutRYswtrWEhs8WgeKrM7VFbvm16vFjC4jwxiRlcLkKRpqFMqqtC1n7RIxgdaTu9NfaF4sTZctKJ4SCPyqPoSK70Pl7odk0SsbMEzFJJBY5A1H9kD9KU+4U6xNwagFgm3Xseo1h2csiehVyPDN2slNLmjUicE6RVk0WMalCqpYEql0BcvlVmPTmPyjdGEcBlAFtP1a0+ZMe8UXVYS1ZiC4/wDasMvK1T9vBs6ssoUCmd7ukMzgM4cEVJLAxMrLjQwrDJIZTuWYBLDUa2DVDULaRpgpoAzAO1Kj5tT+IEozBkmCqikKGrUep0NPt4TzlPWvVn7bM0ZdX5NHJG+OwxWrM2V6+7Rr/SEpWGdRCiEsS79iaVr/AHEWpeKQciCHL1U5G9WDUsa79IFPwWYnIGUDrUKD393Z9rBqdYYOHkXwshNSN2D3JA/j0hhcnZJUbMfcBv2G0KYZJQVoIIWDqPtnizInJWFZkqSoDZiVBmB6ttUgeRJSaySkmJYaYEMtQoKULe8V+MCRhPFxCkpJSSlwBUE0YOGJ184pq4OJvNL9og5kg37PXrp16yGMqdQ2SAQSzVYg3tXu0OMk9bJcHH9AGLwS5ZVnd3FSDV/heFFW+Z/iKgxX5agHyquGbs1ffCSFpCXZ1ddNu/ntGishiuX76RvLQ9vfrDBUggWokiupYsX0qT6+iohgE/p1MTcC9RGBRLs51Pv/AJj1Cyb1jEuc5SKC7C338oANBOLbffxgyUgpAJZ6lvL6A+cDQCsuzlvt4ImXVywS3VyX0q5NIYx3ATZctRU700OjEG4u27XhPEqQpaiHqHqHeg33vaN0AAOwrSpL/wBrvAVLIUTTqLgVHugAvcNOabM8RK2dLtUgZWcjKc3LW2zgvHsVOA8NBXjFTcuVBQlRCmZ6tRJBBLA+TRkUScpKxawEh8yUqsqo00tppBJmISFLZ0ElzZSCL2UxAIrcmphQtbmGtASNtQI8nsoKL/qetDb49IypF2bYWYMyiwAIqBa/WAT3zGr1jzDLAd39HjxRqYdCQ0Enw3YkMddHrTp84DxAkrOYMXFNuVMMJX+WexHq0K4v2iXfqewgWw8FQZkypQABciYLv7Tdm5YDilsCcrEKH/imne8emYyJZKjmCXA0ykq9948npHhr6lDHyD/CJWy2arPNnSaU9QPVodVNSpCCpzmzBh0belalukKFCStSaA39fv0Me58yEJAtnNNW97wNCiGmMVSgBu1/+8bP2+7RYKnl4kk1EpLuCKskdaV3iGrEnMhwCwoS9HmKLULFju9opF/CxFR7EuxpezC/bTLCaHZJmn8+Wb0l/wDimnpCSxzKpZRp2MPTP8dBNh4b+SEPrC6/8RbNVSveYqxUU+NSSnPQhPjAMS4CvDST3NbwxhsuWU4JUc7uANgCCRzBmo9wepgHE+fMoKoZy2AtypdwetG6e5jAzi0oKAoo5PMpBd6M5HviW7iNKpDysEDLWkFyEOCxNQwy+b3H0gCsCxTmoMqCotusClCCbmu0UpeL/wDSzSASTKTyhmSw6gEMaONh5L8OxWQy0zBmSwBzWHMwOjkEWrpGK7JWaPq2T/6cS1pCywzA11TysWHTQRSlJlBWUKKi7BrDqQ+rwnxlwuS3MFzFMbuCZZHdgWatAISn4woxC01ABUCliLBTAC4p0imnJX+Q062PJUmaVAgrKQQouHZqF9W7VbtBZqZJlsCPEFHcsQ969BTuBEvAkL8SxVRTsa3b0f5aRiZQyKNczgD1+P0i1AylMOcUQQ1a5iTezOdHiNNUDMWxIpv5t1rD5mH2gKjQ10baEZAdcw9HPpFoyuzBh1BiCADS9Kb/AH8YLPCQxoRQFna3XW8WMdMlrQlkFKxQkH2q3OtNBEnEIJIJBsL9vhTWBMdYAoQmzB1VF7V90eISkjr5w2nJ/tYXOrMwpW8ClyhXbUtAUDKFA2cQzgMHmCzRiWqHFrd7++PJoSGAW51d/swbAzAhKneqyC3skDKQ7tuYTbHSEv6MpWUluhFe1o9WirKFNGDOxHxrFRTEryS6Fq0Att8ompSDMYOzinfzgTsVGKkJ0BzFqfQO+8aDCHMcwbv3FaxYTPRL9k8yvaVUMCKN0Bq7WbvEwTnmLJdj+0n9ya1qQTAm6HSsfkLKPEYhlGuZi5Y6k81xSsZDmGwCVGflz/lmhUUbF8zu5LEUB90ZBYjmlTiSzhNLD7ePEShV661h9GDcsFBv3H2ahw5rlpu0eKkLCGCSSVVCakMCGLd7PDckV19yeuUkOX0+xC0NLlqVVjSGhw85XLJIrXXsYHJLYlBvQkhrEwGY+vN1rFAy5YIDuSrTQN0vX4wNUljRXnUQ1KwcGkeTJ4KEpyuAAASdiSQOjn4R5nOQprzKS9Lt8R9I1UitQPI/SHcNiAkMqWFaEnbuITwhbFJyyta1OAbg0r7heMnqZgKBtH/mKkyZIUB+WyiDmNwdvf00ibiEJCwA5DfWEpWtDSyFwi0JmIJqEhw13zPszVijxFQWFqSTVJcbvYkhgbnSIctZzOAaDR7fSGvFdJfb+0NrNkNvQOat5gO4T/4iMEsOlRsoknoM7do2nIacydAP/rf4xvLl5zLSK8h2/es+kJukXBWOTkZpaK1UucuvSUlXbWGcNLdMqtpg/wCKj3/0+6FAvOQByslV7MQlJbb+IIpeUgE0Sx6UCmodL+sKnVD7K9Fvh6WwE3mIUJYISxLuMzFupFVUEKpCFKclsuTlJd+YAt01c7x4vjI/o0yUCqgnOQ2kuWGcVuDQ0AO8KqxKWIq7AUbR3cauW7NCimrbJ5JrFGiZ2X+kUakLW77EsPT5CE8eArFTWII5i9D+m+nygmMmh5KQ5ZfY+0Pt4UnrPjLO6qv1iks2OMrQ5+HEAlbluVgymeod9+xh7AIBSsZAT4qAA4sZqXAcsHFHMKcGmITLU96/GW3X90G4eCpkAgPN1s4BNSCBoYYpIPiJQC1sMruMpq1elL6xCSAJkzsQPQe6Lq0DxpoKgL0FTc0Bq8SMGgqMxWjmpO/zo0BKQ4JysrB2J0Yn3D+Y8xh8QJYkkUtZoNhpfJmPShatBV7wRCElVKKIua17baefSC6BEr+nLlvLaG8OgpStyXBswru5j2dNNK+y4GVtxcbQBEkkk8xJPKd6gQslYN/BzsyS7bFtfvyjfAzCmWRlceKt3oQwTBJ6FsGCgSPV/O8J4MqZQDPmYA9AK7aQCQwgqWtQQFAEBgmtdBXR40w0vmmiYwIyguDqDtb+INJwpVMUlmUlD5WPyuWLw1gEgTJpSgLUClne2Ubi56wm6KSIyMuYhRO1BdrBn+2EHw0gLXNIZI0Bf9yaM5MYJAdRJ1sbam4+kAwRHiKXYAgsA/6hQP8AEw3lBHDOnwkkql4lapntTNCHXbQsdQ/e0ZDHDsDLX4zu6JvKkXclKTQXqP3C43aMiLZLWRJXCpa2BmFlAM1SAziiqlRZWpYA+Sv/AELEJSQlctRIokLZShskKALjVusCn4WaUgSys5WKpWVfIwYFLEg8uxdvOBS8fPFAoKH7VISU+jeu+sQuz00aZYpPw5SWJB3YuOzhw8ZKxa0jKlVNqGGcTxGctxmCUEv4aOVItYah6gF28oX8cvzAHuPmKxplrKRSdfkHw+FlzHK5iQRWob3s0Pr4GlgcwroPs+kR15bglB7/AGRBsHjMoeig9RUg1azcpYXHpGc4T3F/sbRnFYkgk3h12GbYiEFBcskMR1+6EQ4nieR8gUgqo5ZgdWBDdoDNxU2Y2dT9gm/lrrFQ7r72jKTg9XYJS84Zkhxeifm0eSZJMwINDq8eSykAh1OSM3Vi4cf2hnABUyekKVmLe1ZwBFN0mSlbQthUoK1eI6EqDJygEDu52hzFS05SU87uASlj62G1/SNZ2EIYoWlYahsfP+YEjDTKgIWHNWID9Ydp5TJcGsNCyVkrWpNWTXpysSOxhzgiWnIf9p+BhReGKQVB2NWLOz++L/DOHp8VCVFykJo7ODLCvn96RyySizTii7VnO/1CyzrJADV01+IgpxHLlu+1/rBzgiSsENlJprQkO37TpAqagbxqpJ6OZ7ADFEKAsKAQczHJGsHSgTAWACriw7j3wFckkgAOvTLr03el+sCktEujTORMRuDv9IGlX5ilHRVfWHMNIWJyQoZlJQokBi3IfqDAMBhwta0KexOmgJ+2gtG0I4RQ4EAlCl/uo2W7FJvrWjPG2FQo5WDgKWova4HaF+HYaYuXyVAzEAlgaJcbP3guGmtymlN2YliHf59IVkyuxqWgla1UG72NFHWImGWebWhPqTfvFoNlJJpcGmg70/tEnhxASvMSOUEBr1gTEneyphpxZINEmyeltqwYyC7/AKg3084BLxKWSCHYADf+8UOfIVVYA72+/jCsnt7E9crMFF3vRwOx9NOkayZswuAWZWjAg8rns3aGFrDAswgnDkIq6+ZSiHyu1EsC/UQNlRdms6Z7IcKAAuaOBUNVhf1gGDkug5SCcyrClMjXYE+/3Q3NSMxBTlUw9m1hbcEj3GCcGGaWUEAjPMsQCVcgcHps+kN4VhGV2ibLlqVMmHMxCUguQKEfVvURtgQM8wliQoMT/tFjo0Dwy1eJMsKB30ZxG/ikKmhOqxU/7B1aBlLQxwiZmEx0hYMylKg0YhxTziXKAK5oZnIDG4HiJgmDUpKSQVgZrAFn7hqxnD05/GBfmUitP+4DrDeEEbs6T8PLPiTEq0xCXZIVTxUOx3pYfSMgMhblQRlSvxlEK2KSTTQUGgjIy6jIGF4jMlpOVawcwLlSWN3FT9dd4bONM6s6UlWgmBkLOwH7q02rHaTfwuhTqwiJM1SajlApq4Tykg/pLmztEnLMURLm/lrUCwTl5eYB9MtADVxZ7NGXxIPKWfqNIkp4YlaAUlcsGgM2jnYAivcekT5nDZiZnhr5SWALMK2NbA6R1s3h63KAUW5lyylMyrg8wRcppUAnq8T/APpSEh0JmzCAFF1I5jmezhQDiov3tBGb9wTd50RMFJfOFhij2gqnvP33jfw0fsPTKHT6pEUcYJaEJEtC5eZwszKkZLPWrF26CJGG4iJbpSD12Bbr90i3byjWM0tm07Dy1eycinqCrbvWGMLgCQBlCVXf9KmavfqI0xHE3UCqrVFmOtst43XxGWvmKpktRLnIcrndhy5usRLvX9ZSnC/6hzE8KzhygS1D9YLpJ6t8aNs1Ym/hw/8AqQSxAu1qfL4wPEqSf81axsTX0NI1lTESs2R1ZqZmZhT5w4xfVxbuwlJduxUw03DzbDwpjvyEJfd0LIS25CiekO/0S1ECYnxEWcS1Zmb90uh83iAcShbKMsFWrKKT7gxEaoKM35aloP8ArAbs4+kS+J+7KjPGUgnFAlIKZYWAqhCkqAfo7f3ijxTATpeJmqloPs5U0vlSElvSASuLTRyzB4iBYKcgNYg3BFWIOpi5J/EyJgIUGKtwDXc0r3Z4U5TgsK/qUoxk8ujmZqVKykpyrUag+ySdBqD8z6+rUgEgoyqYulTKemjlxXu3x7OdipE2WQpAdNSUpdm83HdzaI2OwqVkoCQsMMpuSHFiwLgWBhcfqO2GqM58FO0znM7EGWwIq406306RQwk5KwqWDkKgrMtnzBhRrAipBFqUjzH8MEoIYEFXMcyWUkuza1G2vlCeGQpKyM2oUkhqFtHYORRvKOlVJWjncXFljgPD1+KZmVklJlgku7uNag29RHPYed+atanrndqn2VdPe0V5vHJiRlMtJpR0tUWPKQxBrSIuFGTOTfIWLjUN53gipW2yk00kjsfwwsJwaMysoVNWFdaJZ6Gg+sJ8U4Yf8QGpAcpYoO55aCvRqxMwk1acM6Qo5Vk8vUB3GoLWMEl8cUtmTkoQW9k0JCSHe9G6ikQoyTbXuTyKzZGDJlqW7pSkk9GB8mofSNeC8N8RJKknIZdw1KkPUirwzjcetUlYdklKg1ADTYavA8MwlpZZSoJqKkVDgM2tNdfSrdCUKQ5M4WlCwE9CCCCXD1Fd2PpHhxikHnCiAaJNKOaggt8Y8wM6YAGY/fmA17QxPwkyaCFKdqJcgbnQuaPvrC7f5EuNIm4taSMycqU6J0HppCEmeAhdR7Ra9qB9m848xKPDWUZgptQ1fQn4xrJkZkPXc0+cbJKjLRQRjEr9pRJFBzWHRJ7qc7mMwc1QkhI9kqW+55h62haWhjyl3ahH28Gw3NLSHqFr3a4O9vKB1ocZYZmAlvMmMCQyR6jV4aw2ULnBYIBUGFAQcoa+gB03jTDJUgzFbs7WDA6+cBTiKzlPqlvKWBS1bQGl4GeBrTlBKcwzFwQ6SHq9RtZtYQCCZmKYtrsG8UfW0E4fNyoCT3oWNSSOmohCZO55xBPMe7/mJNd4VDi8nQ4JYzTaJYT1mpZJ5S1fMtHkJYGYM8wEP+bMU3/EdtdoyF1FJqztuC4hLK8TETQyyQQlpaW/SClQJBDVdla3ixhsDhpqFKlrBXU5hKUE1JqcrOAoXTWpfeOYxvHpipYUUTVUDqZwbOauLsXI+sJyPxOqYpAXLTMUmxVlSaAgOQHbUpjz3GTykaySj5KmOwU+SoTFIALGmYEFiKskuVNoa1s4idOxUqYr8wpQC2bIlILgg0Iuk+7raL2E47MMsrORK6hSGy0q1faVsxYuDWgiLxrCpmlE1fhy1EgLyp9pzZQysFM4zBr6wRkrp4BJk+ejxFZTMdIUw9shq2G+gJTaOb4lh2XmQDlGpSAX6gR2M7DhKE+GWUp2CR7QFC5T3o9mJpCeG4CVZkInJ5QHChy++hA7fGN+OfXLYS45SyjlqKSOnW0BY0YeuvnHaj8GTVgqSJRH7kTKE7Vo/SE8T+D8QkKVL8OaE38OYgm+wLkg6CvQxsuSPuZdZLDOWlrOttGhuW7OK1av9rU6QOdJmSzzy2Id3BDM1/dAUTFmo5eo6A21F9N4t50UpUU5YGoaGv6NBSFhlA/tP239jHOzZ0whyS3nFPgWL5inQ9bv/ERKEqtM1jyXihtGALnw1l29k2PRxCs/MlX5iSNy1uuxEM4bHsXSGGrBxu7HeG149KnzpCgdg21+zRnc08q/5NO0GquhaUZ0lQKXUCHtQgbjeHzx2XMYTJYSU6oJQe2tBs+kTk8UTzJ5kglk8zgA1qDQ+XpGkqYlReYAXPMSmw39pxr5wPj7ZayP4iWEzoRxZC5ZQ4UxdLq57NlYgOLUB7Ckcviyok5hUVsH8z2gWJmof8sMHZ3oRXQ2frFDC4ETAgmYkKNkkkOxoxbbQP74qMVDJnJ98ICnmQFEJVoa1BG7Eix284l4pLUAt5/YjoeI4KbIKZnhmqaqQcyD1pY7hQe0Cm4fPVRDk3b91fMXavpFLk8+CXDwC4UsZAllGrsl3tU0LgWqIp4jAS5gKpcxILNVKVG2tARWnpE+bgUg50zJaSLZrH/S9n6GsPS1eIgKUuXMUn/Vze8X/wBIIO14zk89osap4ZCx2Emywc6QRbMHpXYtftDsvGyc1UuUkAgkJJAo4JoTSziGsfgwpIUSVJDuylMk9lOmjVGaPMDIVnGWWJksp5kpAKVauyw47ekV3Tjb/wCCpxwy/hJaEls3KCci25VtrcAvUgDmFKGMOCzreZnl2cucpDhy3Tcju0QZ0mQlWZHiYc2UZaipANxmSXUHoWr7oLh/xBi0I8JKkTZYLgpGRbsws1R/qB+cZU391/Mick8FKf8AhtCTSbLUCMwClc1qsQ6SX2Vp3hMYOWp0IXMUQ4ygKBT15mcX9IYl/itClEzZa5ZajmtDUuQCr/l6xSXxaRObNiEhRFPFSsKFGGVS061rWxiG+WG02c/Rq2iCnhykMCPgKbd/OAYOW0lNG55j73A+R9I6TCz8pKUKlzf3MZilDsZaBSx12pEbgOCnTcOgypaZgC1lSSWNVGtw9GsT2jWHJhuRXHFxTsHhsWE8rAjWht5Cv9+kQsWWMwf/ALK+aRHQYrhU6UtSlSF5LcqnY+uZn6RG4fhxMnTEZbqCsodwE3oK2O0awnGnJaNGxdCWAJ7NTb4QktXMvrHXL4dhw4UZksg/5kogezcEKLih27VjmpuEUVrUmqcxY9Hu2gaLhNSEmivwNKlTMQuWzMamwClu/oPd5HIHwiamS5MwtMYKSk1DOxLFiKn1jyJlLOjOTzoLPJCjRSP+VasVJ2qK6vvGYjFKcFQcGuYgEhQ/cWzdXJsfKOw/6SyDyJUknMJS2JD0UkEqcJKa01ANnETsRwiSjOuYlctJfLkClkAhgClQJBBsQSLaVjnXLBnW+N+wrIxUxKs4UAoi5JINT7TUzjNdmpS0WMOfEP5gSQQKj2SXNCBQVAL0+Mc9hcTkSZaSVy0k+1LPMAAfZf2g1TVsyRXlgeN43MlTHlFPhLTRqgsGVZgFPdmZwWDtES4nJ/ZIUup1kzhqBmQtXhy1JBzJWygoGjN7SGDHWo3jlpGEmSJv5akzK/4lS4Iaqb70NmN4TRxWYqYlSkcyls5cOVWDu4S9W3OkX53FgtGZYQFgJSS5SVK5qpJFix6gFm2Shycf52HfOB7gHEEypapcwLlZyD4gOxo4U7UBDtcAmOpw2LlzPGVJWlUxIyutKeYllVIFf3Es3vbl5+MWfEdAXKVbYjXqLuRb2t4JIx5kTE8oElRdTABiQKhxYsxa1NiDm5NvJp0lVtFXG4bD4lhiZCETGHMhTL9R7QrauvcxuL/glDPh5jtoSRykgD3Pe7RW43gTPQheHWykh5qCKqAABN3Bo1DofPXBcNmIkTAElSkqYpBzUYDJSz3vd7MRCcpRVxf7GUkmcPjfwziJbvLUtI/UmoalWszH47RHmYNKFKYh0qcNYjMQfOjNoY+jSMdivFlhaFS0lwpglJSwBc5ku2huWA0eOgK/ESkLly1jKcyiQASwcGlzmqCNKxf/AKZw+99GSorwz5NJ4JMmDNLUCq4Tam7k/EQhiPFQspKAFC710fQ1pWm8fWUcIw8vEjIoIXynI5GcB/ZFEuK2v1iZ+JPwylZK0LSMwSKIf2QkOBo7VoLm8VH1kXKpfwOUFWD5mpeYlwXNyBQeXleNlygUhl/zFzHfhXFS3yS/Ep/lqzJFtL7/AGI3kcAUAjOSFKqtIFQCW1FxrswN79S5I1aZNPRzUoBwM4WHtr9vHYcGIQnKUIWhg6VAOHFwWd/r2iXiuCnKVpAUlJ5gl3SKVsKM57dYWnSVhCSCUga6iw6ClTClJT0wTcUddiJWHKSZalSk0stik1qCkgKelCxrVnhPh+FmYfxAVImFZ5VKGZFQP8R3IChRxqb0iVIxakJAYmgrqWDVO8UlcRlqSkqWXA6ZiNhodaPGVPRS5E/IdP4hmoUuXMwSSlQylISvKQ1rKBfQl7+i+B4PKnmYhLyZ6kkolkEOQ/IzFwo0IvahtFTDYiZPQES5SnSn2nCUgH2ScwpYlgb0EZN4Fi/DQo511YBMxJUmza79YzfJGOsP9Qcv3JWF4GV4ZE9MxMtZUUKQpTHMnq7jau3UQXh2Dx0pQSMNmC/3ygQp+tH3d/WB4xc+VRS5qNGWghOtHDjSFjxKaP15vM99Ibk5KsEymnhnT4TgU+W5GClB6nnpU3crUGFHFIlY5SBMKJmDALhglK3Y1DZJrEHQ2MTU8VmPmfsDp62jJ3GSoMpEs1vq+tmrExg/JPaOjadhpcxIzYCY73liaNN6g0hWTwlOUkYaYBZlrZyf2+y/kDHk3HA1KW7E/WAHiB/cvo8xQbsxjaMZ+L+YXYtP4OuWCVOg/pSFpzegLjtSN8JJUpCUJIStIICVoDLJUSCFliPaA8ngU7FE1Yn/AOR/lAJmIBNAody/yjoUZNfaKXsdPM4zNSAmYVTMrgZ1ltaA7Hq9hESXjx4hXMlpUNEJGVLMQ2YJzPX2hUEQoMUWbSNVrVqfe0EOGMfBWC0viSCjKhIQ/wCkuoAf7isP/wARE3EKzGqh1uH9HhJagb08g9dyKnzjQFnY37xceNR0Kwymew9Y8jZCKOSnzVHkaiPoH/WlKYhMwAVWlUt3BsUqBAJYOwAtQm0JYzjmJTkJSFId05UuF1Zi6QtJBFmBHWhhBPEJyUsiecpqUk6F62qDWt4Di+NYjM6iCFKf2U+0LaM5F99Y8qMM4SLfJKtlOR+KFoTMlzJRKVAgpYgpe/NckNc1G9IVVxrBlCEHCUSwCgTmYEGp1sB9mAyONTFOSsB6hSkggkhiFDUdR0MLDjhUWXKlKUDV0gWBBtsPcIa434XyZn2ZUk/0EwZUvLKgrKJjlIKioOVZnB0BuAPXzHfhWYpGeXMzywCpIuXOUAOEknld6E0Aq7haRxHBzBlmyvDJ/Ugf3o1N40MtQ/8Ax8SCDUIKyk7gVoSKX1hKU4vbX65XzH2KOAwkxeHCQhYKs1FM4ykJbQcyiNqAmLiOHTJksoyWQxzKSFPUU3N2Iu2xjhp8zFZhmWpycvtV0pTy9B0gWHxE4KbMtJO7s969OvnDnxOfle5tH1DR3XDVY+RLKMmdKSAld1APQEpUFBtqsCesYv8AEcxLrVMMuYTzSpjkOCCCksEqpZyDW5jl0/iXEocEkKSWJDv53Bt9vBl/ivxCPGloX5MQ9DpdqVjP4UruvkZuSejrJ34mlT05ZlOXMFguCS+YAEabf6rRz6+J5UCWkjLmLZiXFgK0bt87oqxElXspBDghJ03Di1hSFcctJbwyQSaJDEF6jttWCPHFvTJci5ieJTF5UklS0gKBsoFvbB/Tuzt83kcXmLlgAJUpw4UUc1faGmY7vtHEpmTLhKye5uOj0tB8PilhwZYJ1ctckP779oc/TprwLsztl48prLBSXZSSSGtYm1H3h3D8QlzU/nrCi/tKAQtI0ZaCCSKirx8+mcXa0oODcufeMvXSEVcZmAvmYu7EP8YI+ll4ZXej6wnHYTNkMxAUk8qgqpDNlU1FAg2YMe0Jrw+FmSySUJ5ixCgpN31JymrWNnMfNpHGCAUqlylA3dAHoUs0MI4lhy5VIyk1ZCyw7AgtRwzmNPgsfdMpfiDha5WUyikg1GVveHrfatPJXhaEsBMUAqvtJUzsWsDZyQRsIVRi5YP5cxctJ/SrmT5n+31j3FYxbkBaH3DB2+Ua9ZNdfqR1OxwHGJchGRMxS3sQkJCQ5oBUt0gi+NvVM0v/ALEjN79b0aOBlYl3zoJHQU77HyjaXPCqJXlbc/Ixk/S+5as7SdxRRIDsg+2kpzIJFiEqLCvT+wMXxFIV4hSgoIYjwpQP+4EX7V6iOPXOVbN5A/bRojFKapL61eze+LXpkJsvzMfkchCCpSndSElgWajgjdvlSE5vGUkkeFKAOyBfzH9qmI03Ev1G14CpZNmp1jojwx8gWV8VQf8ALl9wFP51hSfMSovkbsT/AHhByKj7+sbKnERooJaGmGWth7JjVGJCS+V+4B/vAzMfQRgINDTsP7w3GxPI3nQ3LmAJcpO3QteBKWjrrX0hZXd/vpHr/wCqnn9GgjGhJ0EVNBsmBpOt+5jxRTYb3p6Wgb9/vtFAMGeAmqEf8QPhGQserdxGQhWWeHB5iXJ9r4WgsrFqdCaWd2q9dYyMjiY0U1YZCrpGtNLX7x6OEygVMmwp55n91O0ZGRFvBRIxfD0pQFAqfuNz0ichRYVNvpGRkdH4TJlCespqkkEkvX/Sk/EmGMFjF1rXfWMjIxlof4j2diCeUhNaEtU8rv3fWJyEBzHkZDhoJbCSC5sLn5RvMLOwGsZGRp5BbBomqZ3LwCeS9zprGRkC2DBonqdiXHWGDLG0ZGQ2ITWGNIxUeRkaIfgxIe8Ek2jIyLNEGkKL0JFdCRGmZ7gegjIyEM9kKuGDQAG8ZGQ0Sb5y0CKzGRkUxBRBEyQ2t4yMiGUaS0Cv8fCNGjIyLRLBNSNlSxGRkAG+Hlgs41hsywCQLRkZGb2NaFJvsmMjIyKA/9k=",
      decription:"Tforest i love it i want live there"
    },
    { id:14,lecture:"img",
      type:"nature",
      url:"https://cdn.shopify.com/s/files/1/0065/4999/5573/files/cosmos_flowers_sky_1024x1024.jpg?v=1660105054",
      decription:"flowers i dont like flowers"
    },
    { id:15,
      lecture:"img",
      type:"people",
      url:"https://phantom-marca.unidadeditorial.es/e7f6abb3d0a7d4ce8d3692de0713b541/resize/828/f/jpg/assets/multimedia/imagenes/2023/10/10/16969425644523.jpg",
      decription:"its long very very long story i can mm or i cant just a random photo for a self-respected girl"
    },
    { id:16,lecture:"img",
      type:"nature",
      url:"https://imgs.search.brave.com/AvDb_gZHR9dqrFTEdLB5rdk_qvuJH7ui8AGobcnnVbI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jNC53/YWxscGFwZXJmbGFy/ZS5jb20vd2FsbHBh/cGVyLzk0Ny81ODMv/NzQ3L21vdW50YWlu/LW5hdHVyZS1oZC13/YWxscGFwZXJzLXRv/cC1iZWF1dGlmdWwt/ZGVza3RvcC1uYXR1/cmUtaW1hZ2VzLWJh/Y2tncm91bmQtd2Fs/bHBhcGVyLXByZXZp/ZXcuanBn",
      decription:"Mother Nature"
    },
    { id:17,lecture:"img",
      type:"people",
      url:"https://i.pinimg.com/originals/f8/d8/76/f8d87623192b10f364928b1f249b438e.jpg",
      decription:"Still hearting you but you still love me thats me i love all people not only one"
    },
    { id:18,lecture:"vid",
      type:"nature",
      url:"../assets/y2mate.com - Akon  Smack That Official Music Video ft Eminem_480p.mp4",
      decription:"Mother Nature"
    }
    ,
    { id:18,lecture:"img",
      type:"animal",
      url:"https://imgs.search.brave.com/UAG5iRHNgrPLlArJ45dJEt8cNdI_LLXZIXCG8eTTzXg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9vZ2Rl/bl9pbWFnZXMuczMu/YW1hem9uYXdzLmNv/bS93d3cuaWFtY291/bnRyeXNpZGUuY29t/L2ltYWdlcy9zaXRl/cy8yLzIwMjIvMDcv/MTMxNDE2MzgvR2V0/dHlJbWFnZXMtMTA1/OTU2NzEyMi1zY2Fs/ZWQtZTE2NTgxNjQx/NDQ1NTkuanBn",
      decription:"Japanese Goato"
    }
  ];

  // function to inject(send) data to differnet componenets
  getAllHousingLocations(): Gallery[] {
    return this.gallery;
  }
  getHousingLocationFilter(filterType:string):Gallery[]{
    return this.gallery.filter((element:Gallery) => element.type==filterType);
  }
  
  /*getHousingLocationByType(type: string): Gallery[] {
    return this.gallery.filter(gallery => gallery.type === type);
  } 
  
  *************** function can return table with a specefic type of gallery ***************
  */
  
}
