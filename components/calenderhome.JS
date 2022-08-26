function calenderHome()
{
    return `<div id="navbar">
    <button id="home"><i class="fa-solid fa-house"></i> Home</button>
  </div>
  <div id="container">
      <div id="mostleft"></div>
    <div id="left">
      <div id="top">
        <div>
          <h4><i class="fa-solid fa-check"></i>My Upcoming</h4>
        </div>
        <div>
          <button><i class="fa-solid fa-plus"></i>New Task</button>
        </div>
      </div>
      <div id="box">
        <div class="weektask">
          <div>Monday</div>
          <div><i class="fa-solid fa-plus"></i></div>
        </div>
        <div class="weektask">
          <div>Tuesday</div>
          <div><i class="fa-solid fa-plus"></i></div>
        </div>
        <div class="weektask">
          <div>Wednesday</div>
          <div><i class="fa-solid fa-plus"></i></div>
        </div>
        <div class="weektask">
          <div>Thursday</div>
          <div><i class="fa-solid fa-plus"></i></div>
        </div>
        <div class="weektask">
          <div>Friday</div>
          <div><i class="fa-solid fa-plus"></i></div>
        </div>
        <div class="weektask">
          <div>Saturday</div>
          <div><i class="fa-solid fa-plus"></i></div>
        </div>
        <div class="weektask">
          <div>Sunday</div>
          <div><i class="fa-solid fa-plus"></i></div>
        </div>
      </div>
    </div>
    <div id="right">
      <div id="sidenav">
        <div><button>Notifications</button></div>
        <div><button>Recent</button></div>
        <div><button>Favorites</button></div>
      </div>
      <div id="center">
        <img
          src="https://app.coschedule.com/img/notifications-empty-1888c22fd951298ea32d6524dcd478f6.png"
        />
      </div>
    </div>
  </div>`
}
export default calenderHome;