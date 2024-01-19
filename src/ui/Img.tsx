interface ImgProps{
	url: string;
	title: string
}

export const Img = ({url, title}: ImgProps) => {
	return <div className="img">
		<img src={url} />
		<h3>{title}</h3>
	</div>
}