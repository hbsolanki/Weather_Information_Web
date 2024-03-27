{
  /* <div className="InfoBox">
  <div className="cardContainer">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={INT_URL} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}&deg;C</p>
          <p>Max Temp = {info.tempMax}&deg;C</p>
          <p>
            The Weather can be describe as <i>{info.weather}</i> and feels Like
            = {info.feelslike}&deg;C
          </p>
        </Typography>
      </CardContent>
    </Card>
  </div>
</div>; */
}

let infoBox = () => {
  let InfoBox = document.createElement("div");
  InfoBox.className = "InfoBox";
  InfoBox.innerHTML = "HelloWorld";
  document.append(InfoBox);
  console.log("From InfoBox");
};
