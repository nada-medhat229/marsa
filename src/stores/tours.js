import { defineStore } from 'pinia'

export const useTourStore = defineStore('tourStore',{
    state : ()=>({
        searchKey:'',
        typeKey:'',
        tours:[
            {
                id:1,
                title:'Tour 1',
                imgUrl:'src/assets/images/trip1.jpg',
                category:'c1',
                duration:6,
                destinations:['Snorkeling', 'Sunset viewing'],
                pricePerPerson:100,
                description:'Whether you are a couple that wants an exclusive, romantic day at sea or a group of friends that want to enjoy a day exploring the Riviera Maya coast, swimming, snorkeling, or celebrating a special occasion, this yacht is a perfect choice.'
            },
            {
                id:2,
                title:'Tour 2',
                imgUrl:'src/assets/images/trip2.jpg',
                category:'c2',
                duration:6,
                destinations:['Sunset viewing'],
                pricePerPerson:50,
                description:'Whether you are a couple that wants an exclusive, romantic day at sea or a group of friends that want to enjoy a day exploring the Riviera Maya coast, swimming, snorkeling, or celebrating a special occasion, this yacht is a perfect choice.'
            },
            {
                id:3,
                title:'Tour 3',
                imgUrl:'src/assets/images/trip3.jpg',
                category:'c1',
                duration:6,
                destinations:['Snorkeling', 'Sunset viewing'],
                pricePerPerson:100,
                description:'Whether you are a couple that wants an exclusive, romantic day at sea or a group of friends that want to enjoy a day exploring the Riviera Maya coast, swimming, snorkeling, or celebrating a special occasion, this yacht is a perfect choice.'
            },
            {
                id:4,
                title:'Tour 4',
                imgUrl:'src/assets/images/tour1.jpg',
                category:'c3',
                duration:6,
                destinations:['Snorkeling', 'Sunset viewing', 'Skardu'],
                pricePerPerson:80,
                description:'Whether you are a couple that wants an exclusive, romantic day at sea or a group of friends that want to enjoy a day exploring the Riviera Maya coast, swimming, snorkeling, or celebrating a special occasion, this yacht is a perfect choice.'

            },
            {
                id:5,
                title:'Tour 5',
                imgUrl:'src/assets/images/trip1.jpg',
                category:'c1',
                duration:6,
                destinations:['Snorkeling', 'Sunset viewing'],
                pricePerPerson:1000,
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
