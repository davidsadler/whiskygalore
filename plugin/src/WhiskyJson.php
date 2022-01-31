<?php

namespace DTS\WhiskyJson;

use Craft;
use craft\base\Plugin;
use craft\events\RegisterUrlRulesEvent;
use craft\web\UrlManager;
use DTS\WhiskyJson\models\Settings;
use yii\base\Event;

class WhiskyJson extends Plugin
{
    public $hasCpSettings = true;

    /**
     * @return void
     */
    public function init(): void
    {
        parent::init();

        Event::on(
            UrlManager::class,
            UrlManager::EVENT_REGISTER_SITE_URL_RULES,
            function (RegisterUrlRulesEvent $event) {
                /**
                 * Register the one route for the endpoint configured in the settings.
                 */
                $event->rules[$this->settings->endpoint] = 'whisky-json/whiskies/show';
            }
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
