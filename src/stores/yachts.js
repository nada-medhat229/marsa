import { defineStore } from 'pinia'
import image1 from "../assets/images/yah.jpg";
import image2 from "../assets/images/yah.png";
import image3 from "../assets/images/yacht1.jpg";
import image4 from "../assets/images/Alex.jpg";
import image5 from "../assets/images/tour1.jpg";

export const useYachtStore = defineStore('yachtStore',{
    state : ()=>({
        searchKey:'',
        typeKey:'',
        boatTypes : [
            "Motor",
            "Motorboat",
            "RIB",
            "Jet ski",
            "Houseboat",
            "Boat without licence",
            "Motor yacht",
          ],
           boats :[
            {
              name: "Seget Donji",
              type: "Motor",
              image:image1,
              description: "Motor yacht Galeon 440 Fly 960hp (2024)",
              skipper: "Without skipper",
              people: 6,
              cabins: 3,
              berths: 6,
              length: "14 m",
              price: "€2,414/day"
            },
            {
              name: "Seget Donji",
              type: "Motorboat",
              image: image2,
              description: "Motor yacht Beneteau Monte Carlo 52 870... (2022)",
              skipper: "Skipper optional",
              people: 7,
              cabins: 3,
              berths: 7,
              length: "16.3 m",
              price: "€2,129/day"
            },
            {
              name: "Trogir",
              type: "RIB",
              image: image3,
              description: "Gulet Babac (1995)",
              skipper: "Skipper mandatory",
              people: 8,
              cabins: 4,
              berths: 8,
              length: "19 m",
              price: "€1,143/day"
            },
            {
                name: "Seget Donji",
                type: "Jet ski",
                image:image4,
                description: "Motor yacht Galeon 440 Fly 960hp (2024)",
                skipper: "Without skipper",
                people: 6,
                cabins: 3,
                berths: 6,
                length: "14 m",
                price: "€2,414/day"
              },
              {
                name: "Seget Donji",
                type: "Houseboat",
                image: image5,
                description: "Motor yacht Beneteau Monte Carlo 52 870... (2022)",
                skipper: "Skipper optional",
                people: 7,
                cabins: 3,
                berths: 7,
                length: "16.3 m",
                price: "€2,129/day"
              },
              {
                name: "Trogir",
                type: "Boat without licence",
                image: image1,
                description: "Gulet Babac (1995)",
                skipper: "Skipper mandatory",
                people: 8,
                cabins: 4,
                berths: 8,
                length: "19 m",
                price: "€1,143/day"
              },
              {
                name: "Seget Donji",
                type: "Motor yacht",
                image:image2,
                description: "Motor yacht Galeon 440 Fly 960hp (2024)",
                skipper: "Without skipper",
                people: 6,
                cabins: 3,
                berths: 6,
                length: "14 m",
                price: "€2,414/day"
              },
              {
                name: "Seget Donji",
                type: "Motor",
                image:image1,
                description: "Motor yacht Galeon 440 Fly 960hp (2024)",
                skipper: "Without skipper",
                people: 6,
                cabins: 3,
                berths: 6,
                length: "14 m",
                price: "€2,414/day"
              },
              {
                name: "Seget Donji",
                type: "Motorboat",
                image: image2,
                description: "Motor yacht Beneteau Monte Carlo 52 870... (2022)",
                skipper: "Skipper optional",
                people: 7,
                cabins: 3,
                berths: 7,
                length: "16.3 m",
                price: "€2,129/day"
              },
              {
                name: "Trogir",
                type: "RIB",
                image: image3,
                description: "Gulet Babac (1995)",
                skipper: "Skipper mandatory",
                people: 8,
                cabins: 4,
                berths: 8,
                length: "19 m",
                price: "€1,143/day"
              },
              {
                  name: "Seget Donji",
                  type: "Jet ski",
                  image:image4,
                  description: "Motor yacht Galeon 440 Fly 960hp (2024)",
                  skipper: "Without skipper",
                  people: 6,
                  cabins: 3,
                  berths: 6,
                  length: "14 m",
                  price: "€2,414/day"
                },
                {
                  name: "Seget Donji",
                  type: "Houseboat",
                  image: image5,
                  description: "Motor yacht Beneteau Monte Carlo 52 870... (2022)",
                  skipper: "Skipper optional",
                  people: 7,
                  cabins: 3,
                  berths: 7,
                  length: "16.3 m",
                  price: "€2,129/day"
                },
                {
                  name: "Trogir",
                  type: "Boat without licence",
                  image: image1,
                  description: "Gulet Babac (1995)",
                  skipper: "Skipper mandatory",
                  people: 8,
                  cabins: 4,
                  berths: 8,
                  length: "19 m",
                  price: "€1,143/day"
                },
                {
                  name: "Seget Donji",
                  type: "Motor yacht",
                  image:image2,
                  description: "Motor yacht Galeon 440 Fly 960hp (2024)",
                  skipper: "Without skipper",
                  people: 6,
                  cabins: 3,
                  berths: 6,
                  length: "14 m",
                  price: "€2,414/day"
                }
          ],
        yachts:[
            {
                title:'Yacht1',
                imgUrl:'src/assets/images/yacht1.jpg',
                type:'type1',
                capacity:'6',
                features:['f1','f2'],
                pricePerHour:0
            },
            {
                title:'Yacht2',
                imgUrl:'src/assets/images/yacht1.jpg',
                type:'type2',
                capacity:'16',
                features:['f1','f2'],
                pricePerHour:0
            },
            {
                title:'Yacht3',
                imgUrl:'src/assets/images/yacht1.jpg',
                type:'type3',
                capacity:'12',
                features:['f1','f2', 'f3'],
                pricePerHour:44
            },
            {
                title:'Yacht4',
                imgUrl:'src/assets/images/yacht1.jpg',
                type:'type2',
                capacity:'12',
                features:['f1','f2', 'f3'],
                pricePerHour:13
            },
            {
                title:'Yacht5',
                imgUrl:'src/assets/images/yacht1.jpg',
                type:'type3',
                capacity:'20',
                features:['f1','f2'],
                pricePerHour:10
            },
          ]
    }),

    getters:{
        filteredYachts:(state)=>{
            if(state.searchKey==='' && state.typeKey === ''){
                return state.yachts
            }
            return state.yachts.filter(el=>{
                return el.title.toLowerCase().includes(state.searchKey.toLowerCase())
            }).filter(el=>{
                return el.type.includes(state.typeKey)
            })
        },
        topYachts:(state)=>{
            return state.yachts.filter((el,i)=>i<=2)
        }
    },
    actions:{
        setSearchKey(val){
            this.searchKey = val
        },
        setTypeKey(val){
            this.typeKey = val;
        },
        resetFilter(){
            this.searchKey = '';
            this.typeKey = ''
        }
    }

})
