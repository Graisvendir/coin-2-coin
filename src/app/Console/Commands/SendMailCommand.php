<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Mail\Mailable;
use Illuminate\Support\Facades\Mail;
use function Laravel\Prompts\text;

class SendMailCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'send-mail';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Тестовая отправка письма';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $to = text('Email to');
        $title = text('Title', default: 'Тестовое письмо');
        $body = text('Body');

        $mail = new Mailable();
        $mail->to($to)->subject($title)->html($body);

        Mail::send($mail);

        return static::SUCCESS;
    }
}
