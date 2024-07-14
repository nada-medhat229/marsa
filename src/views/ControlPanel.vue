<script setup>
import {ref, computed} from 'vue'

const reservations = ref([
    {
        id:'r1',
        title:'Reservation 1',
        description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores impedit tempore, totam esse sit vitae nisi placeat sed libero facere.',
        status:'pending'
    },
    {
        id:'r2',
        title:'Reservation 2',
        description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores impedit tempore, totam esse sit vitae nisi placeat sed libero facere.',
        status:'accepted'
    },
    {
        id:'r3',
        title:'Reservation 3',
        description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores impedit tempore, totam esse sit vitae nisi placeat sed libero facere.',
        status:'pending'
    }
])

const pendingReservations = computed(()=>{
    return reservations.value.filter(el=>el.status === 'pending')
})
const acceptedReservations = computed(()=>{
    return reservations.value.filter(el=>el.status === 'accepted')
})

function acceptReservation(id){
   const reservation = reservations.value.find((el)=>el.id === id)
   reservation.status = 'accepted'
}
function rejectReservation(id){
    const reservation = reservations.value.find((el)=>el.id === id)
    reservation.status = 'rejected'
}

</script>

<template>
    <main>
        <div class="row">
            <!-- Pending Reservation -->
            <div class="reservations">
                <h3>Pending Reservations</h3>
                <p class="message" v-if="pendingReservations.length<=0">No Reservations</p>
                <div class="reservation-item" v-for="(reservation , i) in pendingReservations" :key="i">
                    <div class="details">
                        <p class="title">{{ reservation.title}}</p>
                        <p class="descrition">{{ reservation.description }}</p>
                    </div>
                    <div class="buttons">
                        <button @click="rejectReservation(reservation.id)" class="reject-btn">Reject</button>
                        <button @click="acceptReservation(reservation.id)" class="accept-btn">Accept</button>
                    </div>
                </div>
            </div>

            <!-- Accepted Reservation -->
            <div class="reservations">
                <h3>Accepted Reservations</h3>
                <p class="message" v-if="acceptedReservations.length<=0">No Reservations</p>
                <div class="reservation-item" v-for="(reservation , i) in acceptedReservations" :key="i">
                    <div class="details">
                        <p class="title">{{ reservation.title}}</p>
                        <p class="descrition">{{ reservation.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main{
    min-height: 70vh;
    padding: 20px 10px;
}

.reservations{
    padding: 10px 0;
    h3{
        background-color: #1f8a6f2c;
        padding: 10px;
        margin-bottom: 15px;
        border-bottom: 1px solid #00000033;
    }
    .message{
        text-align: center;
        font-size: 16px;
    }
}
.reservation-item{
    background-color: #0084ff36;
    padding: 15px;
    border-radius: 15px;
    margin: 10px;

    .details{
        margin-bottom: 10px;
        .title{
            font-size: 16px;
            font-weight: 500;
            margin-bottom: 10px;
        }
        .description{
            font-size: 14px;
            color: #313131;
        }
    }

    .buttons{

        display: flex;
        justify-content: flex-end;
        align-items: center;

        button{
            font-size: 15px;
            padding: 5px 10px;
            color: #fff;
            margin-right: 10px;
            border: none;
            box-shadow: 0 0 5px #00000033;
            border-radius: 5px;
            cursor: pointer;
            transition: all .25s;
        }
        button:active{
            transform: scale(.97);
        }
        .accept-btn{
            background-color: #30cc4a;
        }
        .reject-btn{
            background-color: #f13838;
        }
    }
}
</style>
