import Card from "./components/card/Card";

const cardContentList = [
  {
    id:"0",
    title:"Genesis: Alpha One",
    links:{
          tumbnail:"https://image.api.playstation.com/vulcan/img/cfn/11307xibzNKuM2vnfMfLI1-eSf_SteyhKjlncpo1hT0SkqcMMcgfDqCicTjT0KEHz51hzNQ8CipQyOUFfadriRf2BSA2auFU.jpg", 
          bigres:"bigres",
      },
    shits:10,
    shareLink:"",
    clickBait:"Mi a fos történt itt :O"
  },
  {
    id:"1",
    title:"SHOGO",
    links:{
          tumbnail:"https://cdn.cloudflare.steamstatic.com/steam/apps/610860/capsule_616x353.jpg?t=1575943357", 
          bigres:"bigres",
      },
    shits:30,
    shareLink:"",
    clickBait:"Mechanikus manga trágya :/"
  },
  {
    id:"2",
    title:"Paradise killer",
    links:{
          tumbnail:"https://cdn.akamai.steamstatic.com/steam/apps/1160220/capsule_616x353.jpg?t=1665486746", 
          bigres:"bigres",
      },
    shits:10,
    shareLink:"",
    clickBait:"Színes szagos csilli fos"
  },
  {
    id:"3",
    title:"Duke Nukem forever",
    links:{
          tumbnail:"https://www.hrkgame.com/media/games/.thumbnails/R4JcM.jpg/R4JcM-460x215.jpg", 
          bigres:"bigres",
      },
    shits:98,
    shareLink:"",
    clickBait:"Minőségi kupac szar"
  },
];


function App() {
  return (
    <div>
        {cardContentList.map((cardContent) => (
        <Card cardContent={cardContent} />))}
    </div>
  );
}

export default App;
