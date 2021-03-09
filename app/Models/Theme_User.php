<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Model\User;

class Theme_User extends Model
{
    use HasFactory;
    
    public function user(){
        return $this->belongsTo(User::class);
    }
}
