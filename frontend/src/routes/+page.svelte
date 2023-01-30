
    <div class="about-page">
    
    <div class="header-hero">
        <div> 
            <h1 id="name">Ada Lovelace</h1>
            <h2> Verdens første programmeringsnørd. </h2>
            <p> London, England</p>
           <div style="display: flex; flex-direction:row;">
            <a href="https://twitter.com/search?lang=en&q=%23adalovelace" class="button-1" > Twitter</a>
            <a href="https://no.wikipedia.org/wiki/Ada_Lovelace" class="button-1" > Wiki</a></div> 
        </div>
        <img src="https://cdn.britannica.com/22/23622-050-E60DC899/Ada-King-countess-Lovelace-Alfred-Edward-Chalon-circa-1838.jpg" alt="Ada Lovelace" />
        
        
    
    </div>
</div>

<script>

export let data;

console.log(data.about[0]);


</script>
<style>
    * {
    font-family: Arial, Helvetica, sans-serif;
}
.about-page {
    display: flex;
    flex-direction: column;
    
}

.header-hero{
    display: flex;

}

.header-hero *{
    width: 50vw;
}

.header-hero div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center ;
}
.button-1{
  background-color: #4c9eea;
  border-radius: 8px;
  border-style: none;
  color: #FFFFFF;
  height: 30px;
  width: 100px;
  margin: 0;
  padding: 10px 16px;
  text-align: center;
  text-decoration: none;
  margin: 0 10px 0 0;
}
</style>