import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Card, Button, Typography } from 'antd';

const { Meta } = Card;
const { Text } = Typography;


export default function EffectUse() {
    const [count, setCount] = useState(0);

    const countUp = () => {
        setCount(count + 1);
    };

    const countDown = () => {
        setCount (count - 1);
    };

    useEffect(() => {
        if (count >0) {
            alert(`Cart Shoes Update`);
        }
    }, [count]);

    return (
        <div style={{textAlign:'center', display: 'inline-block', height:'83vh'}}>
            <Card hoverable style={{display: 'inline-block', width:315, margin:'15px', boxShadow:'0px 1px 1px'}} 
            cover={<img alt="gambar1" height="345px" src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7ba43114-b6b5-4e05-ad20-f05daf00f09f/jordan-hoodie-05c1PG.jpg" />}>
            <Meta title="Jordan" description="Rp 1,549,000" />
            <div>
            <Button type="primary" shape="round" style={{margin:'15px 25px 0px 25px'}} onClick={countUp}>
                Add to Cart
            </Button>
            </div>
            <div>
            <Button type="danger" shape="round" style={{margin:'7px 25px 0px 25px'}} onClick={countDown}>
                Remove Cart
            </Button>
            </div>
            <Text>Total cart : {count}</Text>
            <div>
                <Text>Ini useEffect</Text>
            </div>
            </Card>
        </div>
    );
}