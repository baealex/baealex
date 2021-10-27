<?php
    class TelegramBot {
        function __construct($token) {
            $this->token = $token;
            $this->url = 'https://api.telegram.org/bot'.$token;
        }

        function get($url, $param='') {
            $ch = curl_init();
            if($param != '') {
                $url = $url.'?'.http_build_query($param, '');
            }

            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

            $response = curl_exec($ch);
            curl_close($ch);
            return $response;
        }

        function send_message($chat_id, $text) {
            $url = $this->url.'/sendMessage';
            $data = array(
                'chat_id' => $chat_id,
                'text' => $text
            );
            return $this->get($url, $data);
        }

        function get_updateds() {
            $url = $this->url.'/getUpdates';
            return $this->get($url, $data);
        }

        function set_webhook($url) {
            $url = $this->url.'/setWebhook';
            $data = array(
                'url' => $url
            );
            return $this->get($url, $data);
        }

        function get_webhook_info() {
            $url = $this->url.'/getWebhookInfo';
            return $this->get($url, $data);
        }

        function delete_webhook() {
            $url = $this->url.'/deleteWebhook';
            return $this->get($url, $data);
        }
    }
?>