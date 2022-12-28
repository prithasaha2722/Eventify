import React, { Fragment } from 'react'
import classes from './MainPage.module.css'
import BannerMainSide from '../../Images/BannerMainSide.jpg'
import Functionality from './Functionality'
import FeatureArea from './FeatureArea'
import Feature1 from '../../Images/Feature1.jpg'
import Feature2 from '../../Images/Feature2.jpg'
import Feature3 from '../../Images/Feature3.jpg'
import Share from '../../Images/Share.jpg'
import whatIsBannerify from '../../Images/whatIsBannerify.png'
import Button from '../UI/Button'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Properties from './Properties'
import Property1 from '../../Images/01.svg'
import Property2 from '../../Images/02.svg'
import Property3 from '../../Images/03.svg'
import Property4 from '../../Images/04.svg'
import Property5 from '../../Images/05.svg'
import Property6 from '../../Images/06.svg'
import Property7 from '../../Images/07.svg'
import Property8 from '../../Images/08.svg'
import properties from '../../Images/properties.png'

const propertyObj = [
    {
        Image: Property1,
        Text: `Upload your images to the Visme library in the banner maker. If you don't have any, you can use the ones provided in the left-hand panel.`
    },
    {
        Image: Property2,
        Text: `In the Visme dashboard, decide whether you're creating social graphics or website graphics and click on the corresponding tab. Once inside, choose the right type of banner.`
    },
    {
        Image: Property3,
        Text: `To get started, pick a professional banner template from the Visme dashboard. Select the template that fits your vision or your business best in terms of composition, color and substance. You can also design a custom banner from scratch.`
    },
    {
        Image: Property4,
        Text: `Add your own photos and graphics into the template within the banner maker. Customize the fonts and colors to match your brand. Use the theme colors on the left-hand panel or your integrated Brand Kit.`
    },
    {
        Image: Property5,
        Text: `Proofread everything before you download the finished banner. Double check the quality of the images within the banner maker.`
    },
    {
        Image: Property6,
        Text: `Download your graphic from the banner maker and upload it to your social media profile. Check the composition on both desktop and mobile. Edit and re-download if necessary.`
    },
    {
        Image: Property7,
        Text: `Go back into the Visme dashboard and duplicate your banner. Use the banner creator to resize it for another social media profile.`
    }
    , {
        Image: Property8,
        Text: `Adjust the elements in the design to fit the new size. You can do this with all the types of banners available and stay on brand at the same time.`
    }
]

export default function MainPage() {

    return (
        <Fragment>
            <div className={classes.MainPage}>
                <div className={classes.bodyArea}>
                    <div className={classes.preHeader}>Banners</div>
                    <div className={classes.mainHeader}>Free Banner Maker for Stunning Banners</div>
                    <div className={classes.subHeaderSection}>
                        <Button boxShadow={true} />
                        <div className={classes.subHeader}>It's free and easy to use.</div>
                    </div>
                </div>
                <div className={classes.design}>
                    <img src={BannerMainSide} alt='BannerMainSide' />
                </div>
            </div>
            <div className={classes.details}>
                <Functionality text={`Easy-to-use banner maker with drag-and-drop functionality.`} />
                <Functionality text={`Hundreds of banner templates to choose from.`} />
                <Functionality text={`Create banners hassle-free and choose the ideal banner size for you.`} />
            </div>
            <div className={classes.featureArea}>
                <FeatureArea image={Feature1} alt={`Feature1`} header={`Beautiful banner templates`} para={`Choose from hundreds of professionally designed templates and customize the images, graphics and fonts to make a banner that matches your brand. Easily resize your banner designs for different platforms and download as high-resolution JPG or PNG files.`} />
                <FeatureArea image={Feature2} alt={`Feature2`} header={`Build your banner`} para={`Design custom banners using Visme’s easy banner creator and stunning built-in and preset design elements. Get all of your photos, icons and more perfectly placed on the banner canvas until you’ve built the perfect online banner, then download online without watermark.`} orientation={true} />
                <FeatureArea image={Feature3} alt={`Feature3`} header={`Customize every aspect of your banner with your own graphics and fonts`} para={`Use your brand style guide to customize the fonts and color palette. Add your own graphics, photos and brand information into the online banner maker. Create custom graphics using lines and shapes. Proofread all the text and double check the quality of your images. Get started creating all types of professional banners, from Facebook covers to YouTube banners and more.`} />
                <FeatureArea image={Share} alt={`Share`} header={`Share Your Banner`} para={`Visme makes it easy for you to share your banner design. Download your finished product from Visme's free banner maker as a high-resolution PNG or JPG image and upload it to your social media page. Once you've done that, you can easily get back into the dashboard, make a copy of the banner and resize it for all of your other social media channels. Adjust the elements to fit the new size, and download again.`} />
            </div>
            <div className={classes.properties}>
                <div className={classes.propertiesHead}>
                    <div className={classes.propertiesPreHeader}>QUICK TIPS</div>
                    <div className={classes.propertiesHeader}>
                        <div className={classes.propertiesHeaderText}>How to Use the <span>Banner</span> Maker</div>
                        <div className={classes.propertiesImage}><img src={properties} alt='properties' /></div>
                    </div>
                </div>
                <div className={classes.propertiesBody}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            {propertyObj.map((item, index) => <Grid item xs={6}>
                                <Properties Image={item.Image} propertyNumber={index + 1} Text={item.Text} />
                            </Grid>)}
                        </Grid>
                    </Box>
                </div>
            </div>
            <div className={classes.whoAreWeArea}>
                <div className={classes.bannerifyBody}>
                    <div className={classes.bannerifyPreHeader}>LEARN ABOUT BANNERIFY</div>
                    <div className={classes.bannerifyHeader}>What is a <span>Banner?</span></div>
                    <div className={classes.bannerifyPara}>A banner comes in many different shapes and sizes, and these designs are typically used to represent your business on a website or social media profile. They're often seen as social media cover photos or website banners, but can also be used as online ads for promotional campaigns.</div>
                    <div className={classes.subPara}>You can easily create banners for any platform using Visme. Simply create your base design, download, then customize the dimensions for each platform you're designing for.</div>
                    <Button />
                </div>
                <div className={classes.bannerifyImage}>
                    <img src={whatIsBannerify} alt='whatIsBannerify' />
                </div>
            </div>
        </Fragment>
    )
}
