import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Card, Button, Image, Typography } from 'antd';

const { Meta } = Card;
const { Text } = Typography;

export default function StateUse() {
    const [showImage, setShowImage] = useState(true);
    
    const hideImage = () => {
        setShowImage(!showImage);
    };

    return (
        <div style={{textAlign:'center', display: 'inline-block', height:'83vh'}}>
            <Card hoverable style={{display: 'inline-block', width:380, margin:'15px', boxShadow:'0px 1px 1px'}}>
                <div style={{margin:'0px 0px 8px 0px'}}>
                    <Button type="primary" shape="round" onClick={hideImage}>
                        {showImage !== true ? "Show a Picture" : "Hide a Picture"}
                        </Button>
                </div>
                <Image style={{ height:'380px', display: showImage === true ? "flex" : "none" }} src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c301dbf1-3c0f-40b7-a224-4a91756331e4/air-jordan-xxxv-pf-tech-pack-basketball-shoe-T4GrDr.jpg"/>
                <Meta title="Air Jordan XXXV PF 'Tech Pack'" description="Rp 2,889,000" />
                <Text>Ini useState</Text>
            </Card>
        </div>
    );
}