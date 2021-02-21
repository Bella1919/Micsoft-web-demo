function theMethodhere(){
     console.log('abc')
     const x=`       <a class="mx-auto  navbar-brand" href="#">
        <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31"
            style="width: 120px;">
     </a>
    <input type="email" class="mx-1 form-control" id="exmpleInputEmail" aria-describedby="emailHelp">
    <button type="button" onclick="remove()" class="mx-1 btn btn-outline-secondary">Cancel</button>
    
    `
    document.getElementById('navfirst').innerHTML = x

}

function remove(){
    const x =`
    <a class="order-2 order-lg-1 navbar-brand" href="#">
    <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31"
       style="width: 120px;">
</a>
<button class="navbar-toggler order-0" type="button" data-bs-toggle="collapse" 
      data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" 
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
</button>
<div class=" order-lg-2 collapse navbar-collapse" id="navbarSupportedContent" >
      <div style="color: #262626">
         <ul class="navbar-nav me-auto mb-2 mb-lg-0" >
              <li class="nav-item "  class="navsencond">
                  <a class="nav-link active" aria-current="page" href="http://google.com">
                      Micrcsoft 365</a>
              </li>
              <li class="nav-item" >
                  <a class="nav-link" href="http://google.com">Office</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="http://google.com">Windows</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="http://google.com">Surface</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="http://google.com">Xbox</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="http://google.com">Sale</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="http://google.com">Support</a>
              </li>
          </ul>   
      </div> 
      <div class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" 
            aria-expanded="false" style="color:#262626">
            All Microsoft
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
     </div>     
 </div> 
 <a class="order-1 order-lg-3" style="color:#262626" onclick="theMethodhere()">
     <span class="material-icons">
         search 
     </span>
 </a>
 <a class="order-3 order-lg-4" style="color:#262626" href="http://google.com">
     <span class="material-icons">
         shopping_cart
     </span>
 </a>
 <a class="order-4 order-lg-5 "style="color:#262626" href="http://google.com">
     <span class="material-icons">
         person_search
     </span>
    
    `
    document.getElementById('navfirst').innerHTML = x
}