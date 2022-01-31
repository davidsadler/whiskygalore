<?php

namespace DTS\WhiskyJson;

use Craft;
use craft\base\Plugin;
use DTS\WhiskyJson\models\Settings;

class WhiskyJson extends Plugin
{
    public $hasCpSettings = true;

    /**
     * @return void
     */
    public function init(): void
    {
        parent::init();

        Craft::info(
            Craft::t(
                'whisky-json',
                '{name} plugin loaded',
                ['name' => $this->name]
            ),
            __METHOD__
        );

        Craft::info(
            Craft::t(
                'whisky-json',
                $this->settings->endpoint,
            ),
            __METHOD__
        );
    }

    /**
     * @return Settings
     */
    protected function createSettingsModel(): Settings
    {
        return new Settings();
    }

    /**
     * @return string|null
     * @throws \Twig\Error\LoaderError
     * @throws \Twig\Error\RuntimeError
     * @throws \Twig\Error\SyntaxError
     * @throws \yii\base\Exception
     */
    protected function settingsHtml(): ?string
    {
        return Craft::$app->getView()->renderTemplate(
            'whisky-json/settings',
            [ 'settings' => $this->getSettings() ]
        );
    }
}
