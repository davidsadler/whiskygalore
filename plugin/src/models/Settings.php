<?php

namespace DTS\WhiskyJson\models;

use craft\base\Model;

class Settings extends Model
{
    /**
     * Endpoint where Whisky entry data will be returned by plugin.
     *
     * @var string
     */
    public string $endpoint = 'whisky-json';

    /**
     * @return array
     */
    public function rules(): array
    {
        return [
            ['endpoint', 'required', 'message' => 'Please enter an endpoint.'],
            ['endpoint', 'string'],
        ];
    }
}
