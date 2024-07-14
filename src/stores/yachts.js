import { defineStore } from 'pinia'

export const useYachtStore = defineStore('yachtStore',{
    state : ()=>({
        searchKey:'',
        typeKey:'',
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
