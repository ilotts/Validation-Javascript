var username = document.getElementById('username');
var form = document.getElementById('form');
var errorEle = document.getElementById('error');
var nav = document.getElementById('nav');
var display = document.getElementById('display');
var info = document.getElementById('info');
var noteForm = document.getElementById('noteForm');
var noteButton = document.getElementById('noteButton');

function defaultView()
{
  nav.style.visibility = "hidden"
  display.style.visibility = "hidden"
  info.style.visibility = "hidden"
  noteForm.style.visibility = "hidden"
  noteButton.style.visibility = "hidden"
  form.style.visibility = "visible"
}

defaultView()

function navPage()
  {
    nav.style.visibility = "visible"
    display.style.visibility = "visible"
    info.style.visibility = "visible"
    form.style.visibility = "hidden"
  }

function homePage()
  {
    noteForm.style.visibility = "hidden"
    noteButton.style.visibility = "hidden"
  }

function aboutPage()
  {
    noteForm.style.visibility = "hidden"
    noteButton.style.visibility = "hidden"
  }

function viewPage()
  {
    noteForm.style.visibility = "visible"
    noteButton.style.visibility = "visible"
  }
     
  var pages = [
      {
        name: "Home",
        content: "Home",
        info: "This is the Home Page. Pretty boring."
      },
      {
        name: "About",
        content: "About",
        info: "Do you really need to know about me?"
      },
      {
        name: "View",
        content: "View Notes",
        info: "Please leave a note for me. The note must be more than 1 character long!"
      }
    ]

    for(var i = 0; i < pages.length; i++)
      {
        createPage(pages[i])
      }
    function createPage(pg)
        {
          var button = document.createElement("button")
          button.addEventListener("click", function()
        {
          contentWrite(pg.content, pg.info, pg.name)
        })
            button.innerHTML = pg.name
            nav.appendChild(button)
          }
    function contentWrite(wd, inf, pg)
        { 
          display.innerHTML = wd
           info.innerHTML = inf
 
          if (pg == "Home")
            {
              homePage()
            }
          if (pg == "About")
            {
              aboutPage()
            } 
          if (pg == "View")
            {
              viewPage()
            }
          }  

var list = []

function render()
  {
    for(var i = 0; i < list.length; i++)
     {
      var ele = document.createElement('div')
      ele.innerHTML = list[i]
      document.body.querySelector(".noteList").appendChild(ele)
     }
  }

function noteSubmit()
 {
  var noteInput = document.body.querySelector(".noteInput").value
  var noteList = document.body.querySelector(".noteList")
  var noteErr = document.body.querySelector(".noteErr")
  
  if (noteInput.length >= 2)
    {
      noteErr.innerHTML = ""
      noteList.innerHTML = ""
       list.push(" " +noteInput)
    }
     else
    {
      noteErr.innerHTML = "Note must be more than one character long. Please try a longer note."
      noteList.innerHTML = ""
    }
   render()
 }

noteButton.addEventListener("click", function()
  {
    noteSubmit()
  })

form.addEventListener('submit', (err) => 
  {
    let messages = []
    if (username.value !== "coolStudent123")
      {
        messages.push('Valid username required')
      }
    if (username.value == "coolStudent123")
      {
        errorEle.innerText = ""
        username.value = ""
        navPage()
        err.preventDefault()
      }
  
  if (messages.length > 0)
      {
        err.preventDefault()
        errorEle.innerText = messages.join(', ')
      }
})