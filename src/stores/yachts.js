import { defineStore } from 'pinia'

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
              image:'src/assets/images/yah.jpg',
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
              image: 'src/assets/images/yah.png',
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
              image: 'src/assets/images/yacht1.jpg',
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
                image:'src/assets/images/Alex.jpg',
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
                image: 'src/assets/images/tour1.jpg',
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
                image: 'src/assets/images/yah.jpg',
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
                image:'src/assets/images/yah.png',
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
                image:'src/assets/images/yah.jpg',
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
                image: 'src/assets/images/yah.png',
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
                image: 'src/assets/images/yacht1.jpg',
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
                  image:'src/assets/images/Alex.jpg',
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
                  image: 'src/assets/images/tour1.jpg',
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
                  image: 'src/assets/images/yah.jpg',
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
                  image:'src/assets/images/yah.png',
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
