
declare var $: any;

export class MyTree {
static init(column: any, data: any) {
  // console.log('working', data);
  $('#v').html('<span>done</span>');
  $('#k').jqGrid({
    colModel: column,
    data: data
});
}
}
