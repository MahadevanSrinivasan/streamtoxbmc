/**
 * Saves options to localStorage.
 */
function saveOptions() {
  var ipelement = document.getElementById("ip");
  var portelement = document.getElementById("port");
  var status = document.getElementById("status");

  var ipvalid = isIpAddressValid(ipelement.value);

  if(!ipvalid) {
    return;
  }
  localStorage["ip"] = ipelement.value;
  localStorage["port"] = portelement.value;
}

/**
 * This function validates the given IP address for the required format
 */

function isIpAddressValid(ipaddress)
{
  console.log(ipaddress);
  if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress))
  {
    console.log("correct IP");
    return (true);
  }
  console.log("wrong IP");
  return (false);
}

/** 
 * Restores select box state to saved value from localStorage.
 */
 
function restoreOptions() {
  var ip = localStorage["ip"];
  var port = localStorage["port"];
  if (!ip && !port) {
    return;
  }
  document.getElementById("ip").value = ip;
  document.getElementById("port").value = port;
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector('#save').addEventListener('click', saveOptions);