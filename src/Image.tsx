import NextImage from "next/image"

import React, {useState} from "react"
import {BrokenImage as BrokenImageIcon} from "@material-ui/icons"

import {createStyles, makeStyles} from "@material-ui/core/styles";

export interface ImageProps {
    src: string
    aspectRatio: number
    animationDuration: number
}

const useStyles = makeStyles(theme =>
    createStyles({
        root: ({aspectRatio, animationDuration}: ImageProps) => ({
            backgroundColor: theme.palette.background.paper,
            paddingTop: `calc(1 / ${aspectRatio} * 100%)`,
            position: "relative",
            transition: `filterBrightness ${animationDuration * 0.75}ms cubic-bezier(0.4, 0.0, 0.2, 1),
                         filterSaturate ${animationDuration}ms cubic-bezier(0.4, 0.0, 0.2, 1),
                         opacity ${animationDuration / 2}ms cubic-bezier(0.4, 0.0, 0.2, 1)`
        }),
        image: {
            width: "100%",
            height: "100%",
            position: "absolute",
            objectFit: "cover",
            top: 0,
            left: 0,
            border: 0,
            outline: 0
        },
        iconContainer: {
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none"
        }
    })
)

const Image = (props: ImageProps) => {
    const {src} = props
    const classes = useStyles(props)

    const [imageLoaded, setImageLoaded] = useState(false)
    const [imageError, setImageError] = useState(false)

    const imageTransition = {
        opacity: imageLoaded ? 1 : 0,
        filterBrightness: imageLoaded ? 100 : 0,
        filterSaturate: imageLoaded ? 100 : 20
    }

    const handleImageLoad = () => {
        setImageLoaded(true)
        setImageError(false)
    }

    const handleImageError = () => {
        setImageError(true)
    }

    return (
        <div className={classes.root} style={imageTransition}>
            <NextImage src={src} onLoad={handleImageLoad} onError={handleImageError}
                       className={classes.image} layout="fill"/>
            <div className={classes.iconContainer}>
                {imageError && <BrokenImageIcon/>}
            </div>
        </div>
    )
}


Image.defaultProps = {
    aspectRatio: 16 / 9,
    animationDuration: 1500
}

export default Image