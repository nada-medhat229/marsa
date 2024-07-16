import { defineStore } from 'pinia'
import image1 from "../assets/images/trip1.jpg";
import image2 from "../assets/images/trip2.jpg";
import image3 from "../assets/images/trip3.jpg";
import image4 from "../assets/images/tour1.jpg"
export const useTourStore = defineStore('tourStore',{
    state : ()=>({
        searchKey:'',
        typeKey:'',
        tours:[
            {
                id:1,
                title:'Tour 1',
                imgUrl:image1,
                category:'c1',
                duration:'12 people • 400 hp • 8.5 m',
                destinations:['Snorkeling', 'Sunset viewing'],
                pricePerPerson:100,
                icons: [
                    {
                      name: "mdi-account-tie-hat",
                      text: "Skipper optional"
                    },
                    {
                      name: "mdi-seal",
                      text: "super owner"
                    }
                  ],
                description:'Whether you are a couple that wants an exclusive, romantic day at sea or a group of friends that want to enjoy a day exploring the Riviera Maya coast, swimming, snorkeling, or celebrating a special occasion, this yacht is a perfect choice.'
            },
            {
                id:2,
                title:'Tour 2',
                imgUrl:image2,
                category:'c2',
                duration:'12 people • 400 hp • 8.5 m',
                destinations:['Sunset viewing'],
                pricePerPerson:50,
                icons: [
                    {
                      name: "mdi-account-tie-hat",
                      text: "Skipper optional"
                    },
                    {
                      name: "mdi-seal",
                      text: "super owner"
                    }
                  ],
                description:'Whether you are a couple that wants an exclusive, romantic day at sea or a group of friends that want to enjoy a day exploring the Riviera Maya coast, swimming, snorkeling, or celebrating a special occasion, this yacht is a perfect choice.'
            },
            {
                id:3,
                title:'Tour 3',
                imgUrl:image3,
                category:'c1',
                duration:'12 people • 400 hp • 8.5 m',
                destinations:['Snorkeling', 'Sunset viewing'],
                pricePerPerson:100,
                icons: [
                    {
                      name: "mdi-account-tie-hat",
                      text: "Skipper optional"
                    },
                    {
                      name: "mdi-seal",
                      text: "super owner"
                    }
                  ],
                description:'Whether you are a couple that wants an exclusive, romantic day at sea or a group of friends that want to enjoy a day exploring the Riviera Maya coast, swimming, snorkeling, or celebrating a special occasion, this yacht is a perfect choice.'
            },
            {
                id:4,
                title:'Tour 4',
                imgUrl:image4,
                category:'c3',
                duration:'12 people • 400 hp • 8.5 m',
                destinations:['Snorkeling', 'Sunset viewing', 'Skardu'],
                pricePerPerson:80,
                icons: [
                    {
                      name: "mdi-account-tie-hat",
                      text: "Skipper optional"
                    },
                    {
                      name: "mdi-seal",
                      text: "super owner"
                    }
                  ],
                description:'Whether you are a couple that wants an exclusive, romantic day at sea or a group of friends that want to enjoy a day exploring the Riviera Maya coast, swimming, snorkeling, or celebrating a special occasion, this yacht is a perfect choice.'

            },
            {
                id:5,
                title:'Tour 5',
                imgUrl:image1,
                category:'c1',
                duration:'12 people • 400 hp • 8.5 m',
                destinations:['Snorkeling', 'Sunset viewing'],
                pricePerPerson:1000,
                icons: [
                    {
                      name: "mdi-account-tie-hat",
                      text: "Skipper optional"
                    },
                    {
                      name: "mdi-seal",
                      text: "super owner"
                    }
                  ],
                description:'Whether you are a couple that wants an exclusive, romantic day at sea or a group of friends that want to enjoy a day exploring the Riviera Maya coast, swimming, snorkeling, or celebrating a special occasion, this yacht is a perfect choice.'

            },
          ]
    }),
    getters:{
        filteredTours:(state)=>{
            if(state.searchKey==='' && state.typeKey === ''){
                return state.tours
            }
            return state.tours.filter(el=>{
                return el.title.toLowerCase().includes(state.searchKey.toLowerCase())
            }).filter(el=>{
                return el.category.includes(state.typeKey)
            })
        },
        topTours:(state)=>{
            if(state.tours.length>3){
                return state.tours.filter((el,i)=>i<=2)
            }else{
                return state.tours
            }
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
