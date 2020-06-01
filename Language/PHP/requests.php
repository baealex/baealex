<?php
    class Requests {
        function get($url, $param='') {
            $ch = curl_init();
            if($param != '') {
                $url = $url.'?'.http_build_query($param, '');
            }

            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 100);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
                    
            $response = curl_exec($ch);
            curl_close($ch);

            return $response;
        }

        function post($url, $data='') {
            $ch = curl_init();

            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
            curl_setopt($ch, CURLOPT_POST, true);
            
            $response = curl_exec($ch);
            curl_close($ch);
             
            return $response;
        }
    }
?>