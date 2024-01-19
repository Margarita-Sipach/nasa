import { ImgInfo } from "../types"
import { Img } from "../ui/Img"

interface ImgProps{
	imgInfo: ImgInfo
}

export const Gallery = ({imgInfo}: ImgProps) => {
	const imgInfoArr = Array.isArray(imgInfo) ? imgInfo : [imgInfo];

	return  <div className="gallery">
				{imgInfoArr.map((i) => <Img {...i} key={i} />)}
			</div>
}