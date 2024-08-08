import Header from "./Component/Header";
import Content from "./Component/Content";
import Footer from "./Component/Footer";
function App() {
  return (
    <div className="main">
      <Header />
      <Content
        image="fugi.jpg"
        country="JAPAN"
        name="Mount Fugi"
        startDate={12}
        startMonth="Jan"
        endDate={24}
        endMonth="Jan"
        info="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet).
         Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
      />
      <Content
        image="opera.jpg"
        country="AUSTRALIA"
        name="Sydney Opera"
        startDate={27}
        startMonth="May"
        endDate={8}
        endMonth="Jun"
        info="The Sydney Opera House is a multi-venue performing arts centre in Sydney.
         Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings"
      />
      <Content
        image="gern.jpg"
        country="NORWAY"
        name="Geirangerfjord"
        startDate={`0${1}`}
        startMonth="Oct"
        endDate={18}
        endMonth="Nov"
        info="The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. 
        It is located entirely in the Stranda Municipality."
      />
      <Footer />
    </div>
  );
}

export default App;
