<?php

namespace DTS\WhiskyJson\transformers;

use craft\elements\Asset;
use League\Fractal\TransformerAbstract;

class AssetTransformer extends TransformerAbstract
{
    /**
     * @param Asset $asset
     * @return array
     */
    public function transform(Asset $asset): array
    {
        return [
            'url'    => $asset->getUrl(),
            'width'  => $asset->getWidth(),
            'height' => $asset->getHeight(),
        ];
    }
}
