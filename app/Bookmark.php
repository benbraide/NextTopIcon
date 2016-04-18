<?php

namespace NextTopIcon\App;

use Illuminate\Database\Eloquent\Model;

class Bookmark extends Model
{
    /**
     * Get the target of the bookmark - User | Community | Post | ...
     *
     * @return \Illuminate\Database\Eloquent\Relations\MorphTo
     */
    public function bookmarkable()
    {
        return $this->morphTo();
    }

    /**
     * Get the owner of the bookmark
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user(){
        return $this->belongsTo('App\User');
    }
}
