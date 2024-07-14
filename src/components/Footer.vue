<template>
    <footer>
        <div class="row footer">
            <div class="col">
                <h3>About us</h3>
                <p>We are a leading yacht rental company with over 10 years of experience in the industry. Our mission is to provide the best yacht rental experience for our clients.</p>
            </div>
            <div class="col">
                <h3>Contact us</h3>
                <ul>
                    <li>Email: <a href="">info@yachtrental.com</a></li>
                    <li>Phone: +1 (555) 555-5555</li>
                    <li>Address: 123 Main St, Miami, FL 33139</li>
                </ul>
            </div>
            <div class="col">
                <h3>Follow us</h3>
                <ul class="social-links">
                    <li class="item"><a href=""> <img src="../assets/images/instagram.png" alt=""> </a></li>
                    <li class="item"><a href=""> <img src="../assets/images/facebook.png" alt=""> </a></li>
                    <li class="item"><a href=""> <img src="../assets/images/twitter.png" alt=""> </a></li>
                    <li class="item"><a href=""> <img src="../assets/images/linkedin.png" alt=""> </a></li>
                </ul>
            </div>
        </div>
        <div class="row">
            <p class="copyright-text">© 2023 Yacht Rental. All rights reserved.</p>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
footer{
    background-color: #00425A;
    padding: 30px 20px;
}
.footer{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 50px;
    margin-bottom: 30px;
    @media only screen and (max-width:800px){
      grid-template-columns: repeat(1, 1fr);
      
    }

    .col{
        h3{
            color: #f7f7f7;
            font-size: 24px;
            margin-bottom: 10px;
        }
        p{
            color: #e6e6e6;
            font-size: 16px;
        }
        ul{
            list-style: none;
            color: #e6e6e6;
            font-size: 16px;
            a{
                color: #e6e6e6;
            }
            li{
                margin-bottom: 15px;
            }
        }
    }
}
.social-links{
    display: flex;
    align-items: center;

    img{
        height: 25px;
        margin-right: 15px;
        cursor: pointer;
    }
}
.copyright-text{
    text-align: center;
    color: #fff;
}
</style>
