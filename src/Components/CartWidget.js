import React from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle, CardText } from 'reactstrap'

const CartWidget = () => (
    <div>
        <Card inverse>
            <CardImg
            alt="Japanese Food ! Ramen!"
            src="https://s1.eestatic.com/2016/11/15/cocinillas/cocinillas_170994703_116270236_1706x960.jpg"
            width="100%"
            />
            <CardImgOverlay>
                <CardTitle tag="h5" className='BackBlack'>
                    Uzumaki
                </CardTitle>
                <CardText className='BackBlack'>
                    Our Uzumaki is a Ramen with noodles in chicken and pork bones broth, miso, ajitama, pork belly, green onion, sesame seeds, narutomaki, bean sprouts.
                </CardText>
            </CardImgOverlay>
        </Card>
    </div>
)

export default CartWidget;