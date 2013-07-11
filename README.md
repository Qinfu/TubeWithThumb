#YouTube Player witn Thumbnail

A script for embeding YouTube movie with custom image. need jQuely.


##Installation 

1.Include jQuely, cThumTube.js, ThumTube.css 

2.Set image for thumbnail.

3.Add "name" class to the image tag. And set movie code to the "name" class.

4.Wrap the image tag with block level element. And set class "playerFld".


ex)

<div <b>class="playerFld"></b>
	<img src="images/thumbnail.jpg" width="280" height="158" <b>name="movieID"</b> alt="" />
</div>