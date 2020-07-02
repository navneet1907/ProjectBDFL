$(document).ready(function(){

$("button").click(function(){

  var item1=$("#AGE").val()

  var item2=$("#Project").val()
  var item3=$("#Owner").val()
  var item4=$("#Positions").val()
  var item5=$("#status").val()
  var item6=$("#HiringS").val()
  var item7=$("#Actions").val()
  $("table").append(`
    <tr>
        <th>
            ${item1}
        </th>
        <th >
            ${item2}
        </th>
        <th>
        ${item3}
        </th>
        <th>
        ${item4}
        </th>
        <th>
        ${item5}
        </th>
        <th>
        ${item6}
        </th>
        <th>
        ${item7}
        </th>
        </tr>
        `
  )
  
})
})