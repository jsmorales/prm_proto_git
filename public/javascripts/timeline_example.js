$(function(){
  
  console.log("Listo timeline")

  // DOM element where the Timeline will be attached
  var now = moment().minutes(0).seconds(0).milliseconds(0);
  var groupCount = 6;
  var itemCount = 20;

  // create a data set with groups
  var names = ['Agente 1', 'Agente 2', 'Agente 3', 'Agente 4', 'Agente 5', 'Agente 6'];
  var groups = new vis.DataSet();
  for (var g = 1; g <= groupCount; g++) {
    groups.add({id: 'G'+g, content: names[g-1]});
  }

  // create a dataset with items
  var items = new vis.DataSet();
  
  /*for (var i = 0; i < itemCount; i++) {

    var start = now.clone().add(Math.random() * 200, 'hours');
    var group = Math.floor(Math.random() * groupCount);

    items.add({
      id: i,
      group: group,
      content: 'item ' + i +
          ' <span style="color:#97B0F8;">(' + names[group] + ')</span>',
      start: start,
      type: 'box'
    });

  }*/
  items.add([
    {
        id: 1,
        client: 'AVA',
        flightIn: '9845',
        flightOut: '123',
        eta: '8:00',
        etd: '8:50',
        assigned: '13',
        attended: '7',
        wheelchairs: '9',
        connection: '9501',
        status: 'danger',
        start: moment().add(1, 'm').format('YYYY-MM-DD HH:mm:ss'),        
        end: moment().add(1, 'h').format('YYYY-MM-DD HH:mm:ss'),
        group: 'G1'
      },
      {
        id: 2,
        client: 'AVA',
        flightIn: '9845',
        flightOut: '123',
        eta: '8:00',
        etd: '8:50',
        assigned: '13',
        attended: '7',
        wheelchairs: '9',
        connection: '9501',
        status: 'success',
        start: moment().add(1.5, 'h').format('YYYY-MM-DD HH:mm:ss'),
        end: moment().add(3, 'h').format('YYYY-MM-DD HH:mm:ss'),
        group: 'G1'
      },
      {
        id: 3,
        client: 'AVA',
        flightIn: '9845',
        flightOut: '123',
        eta: '8:00',
        etd: '8:50',
        assigned: '13',
        attended: '7',
        wheelchairs: '9',
        connection: '9501',
        status: 'success',
        start: moment().add(1, 'm').format('YYYY-MM-DD HH:mm:ss'),
        end: moment().add(1, 'h').format('YYYY-MM-DD HH:mm:ss'),
        group: 'G3'
      },
      {
        id: 4,
        client: 'AVA',
        flightIn: '9845',
        flightOut: '123',
        eta: '8:00',
        etd: '8:50',
        assigned: '13',
        attended: '7',
        wheelchairs: '9',
        connection: '9501',
        status: 'success',
        start: moment().add(1, 'm').format('YYYY-MM-DD HH:mm:ss'),
        end: moment().add(1, 'h').format('YYYY-MM-DD HH:mm:ss'),
        group: 'G2'
      },
      {
        id: 5,
        client: 'AVA',
        flightIn: '9845',
        flightOut: '123',
        eta: '8:00',
        etd: '8:50',
        assigned: '13',
        attended: '7',
        wheelchairs: '9',
        connection: '9501',
        status: 'danger',
        start: moment().add(1, 'm').format('YYYY-MM-DD HH:mm:ss'),
        end: moment().add(1, 'h').format('YYYY-MM-DD HH:mm:ss'),
        group: 'G4'
      },
      {
        id: 6,
        client: 'AVA',
        flightIn: '9845',
        flightOut: '123',
        eta: '8:00',
        etd: '8:50',
        assigned: '13',
        attended: '7',
        wheelchairs: '9',
        connection: '9501',
        status: 'warning',
        start: moment().add(1, 'm').format('YYYY-MM-DD HH:mm:ss'),
        end: moment().add(1, 'h').format('YYYY-MM-DD HH:mm:ss'),
        group: 'G5'
      }
  ])

  $.each(items._data, function(index, val) {
     console.log(index)
     console.log(val)

     /*val.content = 'item ' + index +
          ' <span style="color:#97B0F8;">(' + val.group + ')</span>'*/
      val.content = getContentItem(val);
  });

  function getContentItem(val){
    //
    return `
    <div class="panel panel-`+val.status+`">
        <div class="panel-heading text-center">
            `+val.client+` In: `+val.flightIn+`
        </div>
        <div class="panel-body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
        </div>
        <div class="panel-footer">
            Panel Footer
        </div>
    </div>
    `;
  }

  // create visualization
  var container = document.getElementById('visualization');
  var options = {
    groupOrder: 'content'  // groupOrder can be a property name or a sorting function
  };

  var timeline = new vis.Timeline(container);
  timeline.setOptions(options);
  timeline.setGroups(groups);
  timeline.setItems(items);
})