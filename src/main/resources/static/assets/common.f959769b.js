import{ag as f}from"./index.a2819361.js";var s=["icon-401","icon-403","icon-404","icon-add-file","icon-add-folder-back","icon-add-folder","icon-add","icon-admin-login","icon-aliyun","icon-baidu","icon-cancel","icon-card-layout","icon-check","icon-clean","icon-copy","icon-copy2","icon-delete","icon-doge-cloud","icon-download-mult","icon-download-package","icon-download","icon-edit","icon-empty","icon-error","icon-file-type-apk","icon-file-type-archive","icon-file-type-audio","icon-file-type-back","icon-file-type-css","icon-file-type-deb","icon-file-type-dll","icon-file-type-doc","icon-file-type-document","icon-file-type-docx","icon-file-type-exe","icon-file-type-expression","icon-file-type-file","icon-file-type-folder","icon-file-type-html","icon-file-type-image","icon-file-type-java","icon-file-type-js","icon-file-type-less","icon-file-type-md","icon-file-type-office","icon-file-type-pdf","icon-file-type-php","icon-file-type-ppt","icon-file-type-pptx","icon-file-type-py","icon-file-type-rb","icon-file-type-root","icon-file-type-rpm","icon-file-type-rust","icon-file-type-script","icon-file-type-text","icon-file-type-three3d","icon-file-type-vbs","icon-file-type-video","icon-file-type-xls","icon-file-type-xlsx","icon-file-type-xml","icon-file-type-yaml","icon-file-upload","icon-files","icon-ftp","icon-google-drive","icon-huawei","icon-image","icon-img-disable","icon-img-enable","icon-info","icon-install-step","icon-link","icon-local","icon-login","icon-minio","icon-move","icon-new-folder","icon-next","icon-onedrive-china","icon-onedrive","icon-prev","icon-preview","icon-qiniu","icon-refresh","icon-reset-password","icon-s3","icon-search","icon-select-all","icon-server","icon-settings","icon-sftp","icon-sharepoint-china","icon-sharepoint","icon-success","icon-table-layout","icon-target","icon-tencent","icon-tool-close","icon-tool-close2","icon-tool-delete","icon-tool-download-mult","icon-tool-download-package","icon-tool-download","icon-tool-edit","icon-tool-link","icon-tool-move","icon-tool-preview","icon-tool-setting","icon-ufile","icon-upload-1","icon-upload-folder","icon-upload","icon-upyun","icon-warning","icon-webdav","icon-zfile-basic","icon-zfile-horizontal","icon-zfile"];const c={image:["gif","jpg","jpeg","png","bmp","webp","ico"],video:["mp4","webm","m3u8","rmvb","avi","swf","3gp","mkv","flv"],audio:["mp3","wav","wma","ogg","aac","flac","m4a"],text:["lrc","scss","sass","kt","gitignore","bat","properties","yml","css","js","md","xml","txt","py","go","html","less","php","rb","rust","script","java","sh","sql"],executable:["exe","dll","com","vbs"],archive:["7z","zip","rar","tar","gz"],pdf:["pdf"],office:["doc","docx","csv","xls","xlsx","ppt","pptx"],three3d:["dae","fbx","gltf","glb","obj","ply","stl"],document:["txt","pages","epub","numbers","keynote"]},d=["image","video","audio","text","office","pdf","three3d"],l=[];s.forEach(i=>{l.push(i.replace(/^icon-file-type-/,""))});let u={responseCode:{SUCCESS:0,FAIL:-1,REQUIRED_PASSWORD:405,INVALID_PASSWORD:406},storageType:{s3Type:["s3","tencent","aliyun","qiniu","minio","huawei","doge-cloud"],proxyType:["local","webdav","ftp","sftp","google-drive"],micrsoftType:["sharepoint","sharepoint-china","onedrive","onedrive-china"]},version:f.version,constant:{fileTypeMap:c,iconFileType:l,previewFileType:d},openPage:i=>{window.open(i)},fileSizeFormat:i=>{if(i===0)return"-";if(i===-1)return"\u672A\u77E5";let e=1024,o=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],n=Math.floor(Math.log(i)/Math.log(e));return(i/Math.pow(e,n)).toFixed(2)+" "+o[n]},fileSizeFilter:(i,e,o)=>i.type==="BACK"?"":i.type==="FOLDER"&&!i.size?"-":o===0?"0 B":o===-1?"\u672A\u77E5":u.fileSizeFormat(o),getFileIconName(i){let e;if(i.type==="BACK"||i.type==="FOLDER"||i.type==="ROOT")return i.type.toLowerCase();{let o=this.getFileSuffix(i.name),n=this.getFileType(i.name);l.indexOf(o)!==-1?e=o:n?e=n:e="file"}return e},getFileSuffix(i){let e=i.lastIndexOf(".");return e===-1?"other":i.substring(e+1).toLowerCase()},getFileName(i){let e=i.lastIndexOf(".");return e===-1?"":i.substring(0,e)},getFileType(i){let e;for(let o in c){let n=this.getFileSuffix(i);if(c[o].indexOf(n)!==-1){e=o;break}}return e},removeDuplicateSeparator(i){let e="";i.indexOf("http://")===0?e="http://":i.indexOf("https://")===0&&(e="https://");for(let o=e.length;o<i.length-1;o++){let n=i.charAt(o),t=i.charAt(o+1);n==="/"&&t==="/"||(e+=n)}return e+=i.charAt(i.length-1),e},isMobile(){return navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)||window.innerWidth<768},dateFormat:function(i){if(!i)return i;let e=new Date(i),o=e.getFullYear(),n=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1,t=e.getDate()<10?"0"+e.getDate():e.getDate(),r=e.getHours()<10?"0"+e.getHours():e.getHours(),p=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),a=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds();return o+"-"+n+"-"+t+" "+r+":"+p+":"+a}};export{u as c};
